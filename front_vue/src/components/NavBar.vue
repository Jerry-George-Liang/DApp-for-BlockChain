<template>
  <nav class="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-lg sticky top-0 z-50 border-b border-blue-500/30">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16 relative">
        <!-- 科技背景装饰 -->
        <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]"></div>
          <div class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.3)_0%,transparent_50%)]"></div>
        </div>
        
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 relative z-10">
          <i class="fa fa-chain-broken text-2xl text-blue-400 animate-pulse"></i>
          <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">区块链专题</span>
        </router-link>

        <!-- 桌面端导航菜单 -->
        <div class="hidden md:flex items-center space-x-8 relative z-10">
          <router-link to="/" class="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 relative group" :class="{ 'text-blue-400': $route.path === '/' }">
            科普入门
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/tech-principles" class="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 relative group" :class="{ 'text-blue-400': $route.path === '/tech-principles' }">
            技术干货
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/applications" class="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 relative group" :class="{ 'text-blue-400': $route.path === '/applications' }">
            行业应用
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/tools" class="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 relative group" :class="{ 'text-blue-400': $route.path === '/tools' }">
            工具聚合
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          <router-link to="/papers" class="font-medium text-gray-300 hover:text-blue-400 transition-all duration-300 relative group" :class="{ 'text-blue-400': $route.path === '/papers' }">
            论文聚合
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </router-link>
        </div>

        <!-- 搜索框 -->
        <div class="hidden md:flex items-center relative z-10">
          <div class="relative">
            <input
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              placeholder="搜索工具、案例、教程..."
              class="pl-10 pr-4 py-2 rounded-full bg-gray-800/80 border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 w-64 text-gray-300 placeholder-gray-400 backdrop-blur-sm"
            />
            <i class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"></i>
          </div>
        </div>

        <!-- 移动端菜单按钮 -->
        <div class="md:hidden flex items-center relative z-10">
          <button @click="toggleMenu" class="p-2 rounded-md hover:bg-gray-800/50 transition-colors text-gray-300 hover:text-blue-400">
            <i class="fa fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <div v-if="isMenuOpen" class="md:hidden pb-4 relative z-10">
        <!-- 移动端搜索框 -->
        <div class="mb-4">
          <div class="relative">
            <input
              v-model="searchQuery"
              @input="handleSearch"
              type="text"
              placeholder="搜索工具、案例、教程..."
              class="pl-10 pr-4 py-2 rounded-full bg-gray-800/80 border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 w-full text-gray-300 placeholder-gray-400 backdrop-blur-sm"
            />
            <i class="fa fa-search absolute left-3 top-1/2 -translate-y-1/2 text-blue-400"></i>
          </div>
        </div>
        
        <!-- 移动端导航链接 -->
        <div class="flex flex-col space-y-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2 border border-blue-500/20">
          <router-link to="/" class="py-3 px-4 rounded-md hover:bg-blue-500/20 transition-all duration-300 text-gray-300 hover:text-blue-400" :class="{ 'bg-blue-500/20 text-blue-400': $route.path === '/' }">
            <i class="fa fa-home mr-2"></i>科普入门
          </router-link>
          <router-link to="/tech-principles" class="py-3 px-4 rounded-md hover:bg-blue-500/20 transition-all duration-300 text-gray-300 hover:text-blue-400" :class="{ 'bg-blue-500/20 text-blue-400': $route.path === '/tech-principles' }">
            <i class="fa fa-code mr-2"></i>技术干货
          </router-link>
          <router-link to="/applications" class="py-3 px-4 rounded-md hover:bg-blue-500/20 transition-all duration-300 text-gray-300 hover:text-blue-400" :class="{ 'bg-blue-500/20 text-blue-400': $route.path === '/applications' }">
            <i class="fa fa-industry mr-2"></i>行业应用
          </router-link>
          <router-link to="/tools" class="py-3 px-4 rounded-md hover:bg-blue-500/20 transition-all duration-300 text-gray-300 hover:text-blue-400" :class="{ 'bg-blue-500/20 text-blue-400': $route.path === '/tools' }">
            <i class="fa fa-tools mr-2"></i>工具聚合
          </router-link>
          <router-link to="/papers" class="py-3 px-4 rounded-md hover:bg-blue-500/20 transition-all duration-300 text-gray-300 hover:text-blue-400" :class="{ 'bg-blue-500/20 text-blue-400': $route.path === '/papers' }">
            <i class="fa fa-file-alt mr-2"></i>论文聚合
          </router-link>
        </div>
      </div>
    </div>

    <!-- 搜索结果下拉框 -->
    <div v-if="searchResults.length > 0 && searchQuery" class="absolute top-full left-0 right-0 bg-gray-900/90 shadow-xl z-50 border border-blue-500/30 backdrop-blur-md">
      <div class="container mx-auto px-4 py-2">
        <ul>
          <li
            v-for="result in searchResults"
            :key="result.id"
            class="px-4 py-3 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer text-gray-300 hover:text-blue-400 rounded-md flex items-center justify-between"
            @click.stop="selectSearchResult(result)"
          >
            <span class="text-sm flex items-center">
              <i :class="[
                'fa mr-2 text-blue-400',
                result.type === 'tech' ? 'fa-cogs' :
                result.type === 'tool' ? 'fa-tools' :
                result.type === 'app' ? 'fa-industry' :
                result.type === 'code' ? 'fa-code' :
                result.type === 'paper' ? 'fa-file-alt' :
                'fa-search'
              ]"></i>
              {{ result.title }}
            </span>
            <span class="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
              {{ result.type === 'tech' ? '技术原理' :
                 result.type === 'tool' ? '工具' :
                 result.type === 'app' ? '行业应用' :
                 result.type === 'code' ? '代码教程' :
                 result.type === 'paper' ? '论文' :
                 '其他' }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMenuOpen = ref(false)
const searchQuery = ref('')
const searchResults = ref([])

// 切换移动端菜单
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 完整搜索数据源
const searchData = [
  // 技术原理
  { id: 'tech-1', title: '区块链基础架构', type: 'tech', path: '/tech-principles' },
  { id: 'tech-2', title: '共识机制', type: 'tech', path: '/tech-principles' },
  { id: 'tech-3', title: '密码学算法', type: 'tech', path: '/tech-principles' },
  { id: 'tech-4', title: 'SHA-256哈希函数', type: 'tech', path: '/tech-principles' },
  { id: 'tech-5', title: 'Keccak-256哈希函数', type: 'tech', path: '/tech-principles' },
  { id: 'tech-6', title: 'ECDSA椭圆曲线签名算法', type: 'tech', path: '/tech-principles' },
  { id: 'tech-7', title: 'EdDSA数字签名算法', type: 'tech', path: '/tech-principles' },
  { id: 'tech-8', title: '智能合约', type: 'tech', path: '/tech-principles#evm-core' },
  { id: 'tech-9', title: 'EVM虚拟机', type: 'tech', path: '/tech-principles#evm-core' },
  { id: 'tech-10', title: 'Layer2扩展方案', type: 'tech', path: '/tech-principles#layer2-scaling' },
  { id: 'tech-11', title: '跨链技术', type: 'tech', path: '/tech-principles#cross-chain' },
  
  // 工具列表
  { id: 'tool-1', title: 'Etherscan', type: 'tool', path: '/tools#etherscan' },
  { id: 'tool-2', title: 'Blockchair', type: 'tool', path: '/tools#blockchair' },
  { id: 'tool-3', title: 'Dune Analytics', type: 'tool', path: '/tools#dune' },
  { id: 'tool-4', title: 'MetaMask', type: 'tool', path: '/tools#metamask' },

  { id: 'tool-7', title: 'OpenZeppelin Defender', type: 'tool', path: '/tools#openzeppelin' },
  { id: 'tool-8', title: 'Remix IDE', type: 'tool', path: '/tools#remix' },
  { id: 'tool-9', title: 'Hardhat', type: 'tool', path: '/tools#hardhat' },
  { id: 'tool-10', title: 'OpenSea', type: 'tool', path: '/tools#opensea' },
  { id: 'tool-11', title: 'Nansen', type: 'tool', path: '/tools#nansen' },
  { id: 'tool-12', title: 'Rarible', type: 'tool', path: '/tools#rarible' },
  { id: 'tool-13', title: 'Coin Center', type: 'tool', path: '/tools#coincenter' },
  { id: 'tool-14', title: 'Chainalysis', type: 'tool', path: '/tools#chainalysis' },
  
  // 行业应用
  { id: 'app-1', title: '金融服务', type: 'app', path: '/applications' },
  { id: 'app-2', title: '供应链管理', type: 'app', path: '/applications' },
  { id: 'app-3', title: '数字身份', type: 'app', path: '/applications' },
  { id: 'app-4', title: '物联网', type: 'app', path: '/applications' },
  { id: 'app-5', title: '版权保护', type: 'app', path: '/applications' },
  { id: 'app-6', title: '去中心化金融', type: 'app', path: '/applications' },
  
  // 代码教程
  { id: 'code-1', title: 'Solidity智能合约开发', type: 'code', path: '/code-tutorials' },
  { id: 'code-2', title: 'Web3.js开发', type: 'code', path: '/code-tutorials' },
  { id: 'code-3', title: 'Ethers.js开发', type: 'code', path: '/code-tutorials' },
  { id: 'code-4', title: '智能合约测试', type: 'code', path: '/code-tutorials' },
  
  // 论文聚合
  { id: 'paper-1', title: '比特币白皮书', type: 'paper', path: '/papers' },
  { id: 'paper-2', title: '以太坊白皮书', type: 'paper', path: '/papers' },
  { id: 'paper-3', title: '零知识证明', type: 'paper', path: '/papers' },
  { id: 'paper-4', title: '分片技术', type: 'paper', path: '/papers' },
  { id: 'paper-5', title: '侧链技术', type: 'paper', path: '/papers' }
]

// 搜索功能
const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }
  
  const query = searchQuery.value.toLowerCase().trim()
  
  // 搜索匹配
  searchResults.value = searchData.filter(item => {
    // 匹配标题（支持双向部分匹配）
    const titleLower = item.title.toLowerCase()
    const matchTitle = titleLower.includes(query) || query.includes(titleLower)
    
    // 匹配工具ID（支持双向部分匹配）
    const idLower = item.id.toLowerCase()
    const matchId = idLower.includes(query) || query.includes(idLower)
    
    // 匹配类型（支持双向部分匹配）
    const typeLower = item.type.toLowerCase()
    const matchType = typeLower.includes(query) || query.includes(typeLower)
    
    return matchTitle || matchId || matchType
  }).slice(0, 8) // 限制最多显示8个结果
}

// 选择搜索结果
const selectSearchResult = (result) => {
  searchQuery.value = ''
  searchResults.value = []
  
  // 获取路径和锚点
  const [path, hash] = result.path.split('#')
  
  // 检查当前路径是否与目标路径相同
  if (window.location.pathname === path) {
    // 如果路径相同，直接滚动到锚点
    setTimeout(() => {
      if (hash) {
        const element = document.getElementById(hash)
        if (element) {
          // 计算滚动位置，考虑导航栏高度
          const navHeight = 64 // 导航栏高度为16rem = 64px
          const elementTop = element.getBoundingClientRect().top
          const scrollPosition = window.pageYOffset + elementTop - navHeight - 20 // 减去导航栏高度和额外的间距
          
          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          })
        }
      }
    }, 100)
  } else {
    // 如果路径不同，先跳转到对应页面，然后滚动到锚点
    router.push(result.path).then(() => {
      setTimeout(() => {
        if (hash) {
          const element = document.getElementById(hash)
          if (element) {
            // 计算滚动位置，考虑导航栏高度
            const navHeight = 64 // 导航栏高度为16rem = 64px
            const elementTop = element.getBoundingClientRect().top
            const scrollPosition = window.pageYOffset + elementTop - navHeight - 20 // 减去导航栏高度和额外的间距
            
            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            })
          }
        }
      }, 200) // 增加延迟时间，确保页面完全加载
    })
  }
}

// 点击外部关闭搜索结果
const handleClickOutside = (event) => {
  const nav = document.querySelector('nav')
  if (!nav.contains(event.target)) {
    searchResults.value = []
  }
}

document.addEventListener('click', handleClickOutside)
</script>

<style scoped>
/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .animate-fade-in {
    animation-delay: 0s !important;
  }
}
</style>