<template>
  <div id="app" class="min-h-screen flex flex-col relative overflow-hidden">
    <!-- 全局粒子背景 -->
    <canvas ref="particlesCanvas" class="particle-canvas"></canvas>
    
    <!-- 顶部导航栏 -->
    <NavBar />
    
    <!-- 主内容区域 -->
    <main class="flex-1 relative z-10">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>
    
    <!-- 底部页脚 -->
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

// 粒子系统相关
const particlesCanvas = ref(null)
let ctx = null
let particles = []
let animationId = null

// 简化的粒子系统实现
onMounted(() => {
  if (!particlesCanvas.value) return
  
  // 获取Canvas上下文
  ctx = particlesCanvas.value.getContext('2d')
  
  // 设置Canvas尺寸
  const setCanvasSize = () => {
    particlesCanvas.value.width = window.innerWidth
    particlesCanvas.value.height = window.innerHeight
  }
  
  setCanvasSize()
  
  // 创建粒子
  const createParticles = () => {
    particles = []
    const particleCount = 100 // 固定粒子数量，简单可靠
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * particlesCanvas.value.width,
        y: Math.random() * particlesCanvas.value.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: `hsl(${Math.random() * 60 + 180}, 70%, 60%)` // 蓝色系
      })
    }
  }
  
  // 绘制粒子
  const drawParticles = () => {
    particles.forEach(particle => {
      ctx.fillStyle = particle.color
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
    })
  }
  
  // 更新粒子位置
  const updateParticles = () => {
    particles.forEach(particle => {
      particle.x += particle.speedX
      particle.y += particle.speedY
      
      // 边界检测
      if (particle.x < 0 || particle.x > particlesCanvas.value.width) {
        particle.speedX *= -1
      }
      if (particle.y < 0 || particle.y > particlesCanvas.value.height) {
        particle.speedY *= -1
      }
    })
  }
  
  // 绘制连接线
  const drawConnections = () => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          ctx.strokeStyle = `rgba(59, 130, 246, ${(100 - distance) / 100 * 0.3})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
  }
  
  // 动画循环
  const animate = () => {
    ctx.clearRect(0, 0, particlesCanvas.value.width, particlesCanvas.value.height)
    updateParticles()
    drawConnections()
    drawParticles()
    animationId = requestAnimationFrame(animate)
  }
  
  // 初始化并启动动画
  createParticles()
  animate()
  
  // 窗口大小变化监听
  window.addEventListener('resize', () => {
    setCanvasSize()
    createParticles()
  })
  
  // 组件卸载时清理
  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', () => {
      setCanvasSize()
      createParticles()
    })
  })
})
</script>

<style>
/* 全局过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 确保主内容区域占满剩余空间 */
main {
  flex: 1;
  background: transparent;
}

/* 粒子背景样式优化 */
#app {
  position: relative;
  overflow: hidden;
}

.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  pointer-events: none;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  display: block;
  opacity: 1;
}
</style>
