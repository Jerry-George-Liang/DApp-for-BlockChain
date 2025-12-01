<template>
  <footer class="bg-gray-900 py-10 mt-20 relative overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.5)_0%,transparent_50%)]"></div>
      <div class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.5)_0%,transparent_50%)]"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 关于我们 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">关于我们</h3>
          <p class="text-gray-400 text-sm">
            区块链专题网站致力于为区块链入门者、开发者、行业从业者提供系统化学习资源，
            打造「区块链科普+技术学习+工具聚合+行业应用」的一站式资源平台。
           
          </p>
          <div class="flex space-x-4 mt-4">
            <a href="https://github.com/Jerry-George-Liang/BlockChain-DApp/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fa fa-github text-xl"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fa fa-twitter text-xl"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-blue-400 transition-colors">
              <i class="fa fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">快速链接</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/tech-principles" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                技术原理
              </router-link>
            </li>
            <li>
              <router-link to="/papers" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                论文聚合
              </router-link>
            </li>
            <li>
              <router-link to="/code-tutorials" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                代码教程
              </router-link>
            </li>
            <li>
              <router-link to="/applications" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                行业应用
              </router-link>
            </li>
            <li>
              <router-link to="/tools" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                工具聚合
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 联系与声明 -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-white">联系与声明</h3>
          <div class="space-y-4">
            <div>
              <p class="text-gray-400 text-sm">
                <i class="fa fa-envelope-o mr-2 text-blue-400"></i>
                13642533686@163.com
               
    
              </p>
            </div>
            <div>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                隐私政策
              </a>
            </div>
            <div>
              <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                合规声明
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-500 text-sm">
          &copy; {{ new Date().getFullYear() }} 区块链专题网站. 保留所有权利. | 作者：深圳职业技术大学 梁福昇 聂子慧 黄武林 叶茵彤
        </p>
        <p class="text-gray-500 text-xs mt-2">
          本网站仅供学习参考，不构成任何投资建议。区块链技术仍处于发展阶段，请谨慎参与。
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  @apply border-t border-gray-800;
}

footer a {
  @apply text-gray-400 hover:text-blue-400 transition-colors;
}

footer h3 {
  @apply text-white;
}
</style>