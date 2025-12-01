<template>
  <div class="bg-gray-900/0 text-gray-300">
    <!-- 首页横幅 -->
    <section class="bg-gradient-to-br from-primary via-blue-600 to-secondary text-white py-28 relative overflow-hidden">
      <!-- 科技背景网格 -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse-slow"></div>
      
      <!-- 动态光效 -->
      <div class="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div class="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full filter blur-[80px] transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
      
      <!-- 装饰线条 -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div class="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/50 via-primary/20 to-transparent animate-pulse-slow"></div>
        <div class="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-secondary/50 via-secondary/20 to-transparent animate-pulse"></div>
        <div class="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-primary/50 via-primary/20 to-transparent animate-pulse-slow"></div>
        <div class="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent animate-pulse"></div>
      </div>
      
      <!-- 内容区 -->
      <div class="container mx-auto px-4 relative z-10 fade-in">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-center text-shadow-glow">区块链技术科普与应用指南</h1>
        <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-center opacity-95 text-shadow">
          一站式区块链学习平台，从入门到精通，探索区块链技术的无限可能
        </p>
        <div class="flex flex-wrap justify-center gap-6">
          <router-link to="/tech-principles" class="btn-primary hover:btn-primary-hover transition-all duration-300 shadow-lg hover:shadow-primary-glow">
            <i class="fa fa-cogs mr-2"></i>技术原理
          </router-link>
          <router-link to="/code-tutorials" class="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-lg">
            <i class="fa fa-code mr-2"></i>代码教程
          </router-link>
        </div>
      </div>
      
      <!-- 装饰元素 -->
      <div class="absolute right-0 top-0 h-full w-1/3 bg-white/10 backdrop-blur-sm transform -skew-x-12 -translate-x-10"></div>
      <div class="absolute left-0 bottom-0 h-1/3 w-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
    </section>

    <!-- 场景快速入口 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center text-white">场景快速入口</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <router-link to="/tech-principles" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <i class="fa fa-cubes text-2xl text-blue-400"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">技术原理</h3>
            <p class="text-gray-400">深入理解区块链底层技术，从EVM到Layer2扩展方案</p>
          </router-link>
          <router-link to="/code-tutorials" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <i class="fa fa-terminal text-2xl text-purple-400"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">代码教程</h3>
            <p class="text-gray-400">实战Solidity智能合约开发，掌握区块链编程技能</p>
          </router-link>
          <router-link to="/applications" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <i class="fa fa-industry text-2xl text-blue-400"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">行业应用</h3>
            <p class="text-gray-400">探索区块链在金融、供应链等领域的创新应用案例</p>
          </router-link>
          <router-link to="/tools" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 flex flex-col items-center text-center card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <i class="fa fa-wrench text-2xl text-purple-400"></i>
            </div>
            <h3 class="text-xl font-semibold mb-2 text-white">工具聚合</h3>
            <p class="text-gray-400">实用区块链工具集，从钱包到开发审计一应俱全</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- 科普入门区 -->
    <section class="py-16 bg-gray-800/30 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">区块链科普入门</h2>
          <router-link to="#" class="text-blue-400 flex items-center hover:underline">
            查看更多 <i class="fa fa-angle-right ml-1"></i>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 术语词典 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-500/20">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4 text-white">术语词典</h3>
              <div class="space-y-4">
                <div v-for="term in terms" :key="term.id" class="border-b border-gray-700 pb-4 last:border-0">
                  <div class="flex justify-between items-center cursor-pointer" @click="toggleTerm(term.id)">
                    <span class="font-medium text-blue-400">{{ term.word }}</span>
                    <i class="fa fa-chevron-down transition-transform text-gray-400" :class="{ 'rotate-180': expandedTerm === term.id }"></i>
                  </div>
                  <p v-if="expandedTerm === term.id" class="mt-2 text-gray-400 text-sm">
                    {{ term.definition }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 谣言破除 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-500/20">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4 text-white">谣言破除</h3>
              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="text-red-500 text-2xl flex-shrink-0">
                    <i class="fa fa-times-circle"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white mb-1">区块链就是比特币</h4>
                    <p class="text-gray-400 text-sm">区块链是底层技术，比特币只是其应用之一。</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="text-red-500 text-2xl flex-shrink-0">
                    <i class="fa fa-times-circle"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white mb-1">区块链完全匿名</h4>
                    <p class="text-gray-400 text-sm">大多数区块链是伪匿名的，交易可追溯。</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <div class="text-red-500 text-2xl flex-shrink-0">
                    <i class="fa fa-times-circle"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white mb-1">区块链无法篡改</h4>
                    <p class="text-gray-400 text-sm">理论上51%攻击可能篡改数据，只是成本极高。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- 入门路径图 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-500/20">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4 text-white">入门路径图</h3>
              <div class="space-y-6">
                <div class="relative pl-8">
                  <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
                  <h4 class="font-medium text-white mb-1">基础知识</h4>
                  <p class="text-gray-400 text-sm">分布式账本、共识机制、密码学基础</p>
                </div>
                <div class="relative pl-8">
                  <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
                  <h4 class="font-medium text-white mb-1">核心技术</h4>
                  <p class="text-gray-400 text-sm">区块链架构、智能合约、通证经济</p>
                </div>
                <div class="relative pl-8">
                  <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">3</div>
                  <h4 class="font-medium text-white mb-1">开发实践</h4>
                  <p class="text-gray-400 text-sm">Solidity编程、DApp开发、测试部署</p>
                </div>
                <div class="relative pl-8">
                  <div class="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">4</div>
                  <h4 class="font-medium text-white mb-1">前沿探索</h4>
                  <p class="text-gray-400 text-sm">Layer2扩展、跨链技术、DAO治理</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技术干货区 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">技术干货</h2>
          <router-link to="/tech-principles" class="text-blue-400 flex items-center hover:underline">
            查看更多 <i class="fa fa-angle-right ml-1"></i>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 技术原理拆解入口 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center text-white">
                <i class="fa fa-cogs text-blue-400 mr-3"></i>
                技术原理拆解
              </h3>
              <div class="space-y-4">
                <router-link to="/tech-principles#evm-core" class="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span class="text-gray-300">EVM核心功能解析</span>
                  <i class="fa fa-angle-right text-gray-400"></i>
                </router-link>
                <router-link to="/tech-principles#cross-chain" class="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span class="text-gray-300">跨链技术方案对比</span>
                  <i class="fa fa-angle-right text-gray-400"></i>
                </router-link>
                <router-link to="/tech-principles#layer2-scaling" class="flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-blue-500/20 transition-colors cursor-pointer">
                  <span class="text-gray-300">Layer2扩展技术原理</span>
                  <i class="fa fa-angle-right text-gray-400"></i>
                </router-link>
              </div>
            </div>
          </div>
          
          <!-- 代码教程预览 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-4 flex items-center text-white">
                <i class="fa fa-code text-blue-400 mr-3"></i>
                代码教程预览
              </h3>
              <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm">
                <pre><code class="language-solidity">// 简单的ERC20代币示例
contract SimpleToken {
    string public name = "Simple Token";
    string public symbol = "ST";
    uint8 public decimals = 18;
    uint256 public totalSupply;
    
    mapping(address => uint256) balances;
    
    constructor(uint256 _initialSupply) {
        totalSupply = _initialSupply * 10 ** uint256(decimals);
        balances[msg.sender] = totalSupply;
    }
    
    function transfer(address to, uint256 amount) external returns (bool) {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }
}</code></pre>
              </div>
              <div class="mt-4 text-center">
                <router-link to="/code-tutorials" class="inline-block text-blue-400 hover:underline">
                  查看完整教程 <i class="fa fa-long-arrow-right ml-1"></i>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 行业应用区 -->
    <section class="py-16 bg-gray-800/30 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">行业应用</h2>
          <router-link to="/applications" class="text-blue-400 flex items-center hover:underline">
            查看更多 <i class="fa fa-angle-right ml-1"></i>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="case_study in caseStudies" :key="case_study.id" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden card-hover border border-blue-500/20 hover:border-blue-500/50 transition-all">
            <div class="h-40 bg-gray-700/50 flex items-center justify-center">
              <i class="fa fa-building text-5xl text-blue-400/30"></i>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-3">
                <span class="tag bg-blue-500/20 text-blue-400">{{ case_study.industry }}</span>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-white">{{ case_study.title }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ case_study.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-gray-500 text-xs">技术：{{ case_study.tech }}</span>
                <a :href="case_study.url" target="_blank" class="text-blue-400 text-sm font-medium hover:underline">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 工具聚合区 -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-10">
          <h2 class="text-3xl font-bold text-white">工具聚合</h2>
          <router-link to="/tools" class="text-blue-400 flex items-center hover:underline">
            查看更多 <i class="fa fa-angle-right ml-1"></i>
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="tool in hotTools" :key="tool.id" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-blue-500/20">
            <div class="p-5">
              <div class="flex justify-between items-start mb-4">
                <h3 class="font-semibold text-white">{{ tool.name }}</h3>
                <div class="flex items-center">
                  <i class="fa fa-star text-yellow-400"></i>
                  <span class="ml-1 text-sm text-gray-300">{{ tool.rating }}</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mb-4">{{ tool.description }}</p>
              <div class="flex gap-2 flex-wrap">
                <span v-for="tag in tool.tags" :key="tag" class="px-2 py-1 bg-blue-500/20 rounded-md text-xs text-blue-400">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据可视化区域 -->
    <section class="py-16 bg-gray-800/30 backdrop-blur-sm">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-10 text-center text-white">区块链市场洞察</h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- 市场趋势图 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-500/20">
            <h3 class="text-xl font-semibold mb-6 text-white">全球区块链市场趋势</h3>
            <div class="h-80">
              <canvas ref="marketChartRef"></canvas>
            </div>
          </div>
          
          <!-- 应用领域分布 -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-500/20">
            <h3 class="text-xl font-semibold mb-6 text-white">区块链应用领域分布</h3>
            <div class="h-80">
              <canvas ref="distributionChartRef"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart } from 'chart.js/auto'

// 术语数据
const terms = ref([
  { id: 1, word: '区块链', definition: '一种分布式账本技术，通过密码学链接的区块组成，实现数据的不可篡改和去中心化存储。' },
  { id: 2, word: '智能合约', definition: '在区块链上自动执行的代码，一旦预设条件满足，合约会自动触发相应的操作。' },
  { id: 3, word: '去中心化', definition: '不依赖中央权威机构，由分布式网络节点共同维护和验证系统的运行模式。' }
])

// 展开的术语ID
const expandedTerm = ref(null)

// 切换术语展开状态
const toggleTerm = (id) => {
  expandedTerm.value = expandedTerm.value === id ? null : id
}

// 案例数据
const caseStudies = ref([
  {
    id: 1,
    title: '蚂蚁链供应链金融',
    industry: '金融科技',
    description: '基于区块链技术的供应链金融解决方案，连接核心企业与上下游中小企业。',
    tech: '联盟链',
    url: 'https://antdigital.com/docs/11/2402531'
  },
  {
    id: 2,
    title: '沃尔玛食品溯源',
    industry: '供应链',
    description: '利用区块链技术追踪食品从农场到餐桌的全过程，提高食品安全和透明度。',
    tech: 'Hyperledger Fabric',
    url: 'https://www.walmart.cn/science-three/1166.html'
  },
  {
    id: 3,
    title: 'Azure数字身份',
    industry: '数字身份',
    description: '区块链驱动的数字身份管理系统，提供安全、可验证的身份解决方案。',
    tech: '以太坊',
    url: 'https://azure.microsoft.com/zh-cn/products/azure-confidential-ledger'
  }
])

// 热门工具数据
const hotTools = ref([
  {
    id: 1,
    name: 'MetaMask',
    description: '以太坊钱包和DApp浏览器扩展',
    rating: 4.8,
    tags: ['钱包', 'Web3', '以太坊']
  },
  {
    id: 2,
    name: 'Etherscan',
    description: '以太坊区块浏览器和分析平台',
    rating: 4.7,
    tags: ['区块浏览器', '数据查询']
  },
  {
    id: 3,
    name: 'Remix IDE',
    description: '在线Solidity智能合约开发环境',
    rating: 4.5,
    tags: ['开发工具', 'IDE', 'Solidity']
  },
  {
    id: 4,
    name: 'OpenZeppelin',
    description: '安全智能合约开发框架和库',
    rating: 4.9,
    tags: ['开发工具', '安全', '合约库']
  }
])

// 定义ref变量用于引用canvas元素
const marketChartRef = ref(null)
const distributionChartRef = ref(null)

// Chart.js实例
let marketChart = null
let distributionChart = null

// 初始化图表
const initCharts = () => {
  // 市场趋势图
  if (marketChartRef.value) {
    const marketCtx = marketChartRef.value.getContext('2d')
    marketChart = new Chart(marketCtx, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025(预测)'],
        datasets: [{
          label: '区块链市场规模（十亿美元）',
          data: [3.6, 15.7, 23.1, 37.4, 67.4, 122.7],
          borderColor: '#165DFF',
          backgroundColor: 'rgba(22, 93, 255, 0.1)',
          tension: 0.3,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    })
  }

  // 应用领域分布
  if (distributionChartRef.value) {
    const distributionCtx = distributionChartRef.value.getContext('2d')
    distributionChart = new Chart(distributionCtx, {
      type: 'pie',
      data: {
        labels: ['金融服务', '供应链', '数字身份', '游戏/NFT', '其他'],
        datasets: [{
          data: [35, 20, 15, 18, 12],
          backgroundColor: [
            '#165DFF',
            '#69b1ff',
            '#4080ff',
            '#91d5ff',
            '#f0f5ff'
          ],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                return `${context.label}: ${context.raw}%`
              }
            }
          }
        }
      }
    })
  }
}

// 组件挂载时初始化图表
onMounted(() => {
  initCharts()
})

// 组件卸载时销毁图表
onUnmounted(() => {
  if (marketChart) {
    marketChart.destroy()
  }
  if (distributionChart) {
    distributionChart.destroy()
  }
})
</script>

<style scoped>
/* 文字阴影效果 */
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.text-shadow-glow {
  text-shadow: 
    0 0 5px rgba(22, 93, 255, 0.5),
    0 0 10px rgba(22, 93, 255, 0.3),
    0 0 15px rgba(22, 93, 255, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.3);
  animation: text-glow 3s ease-in-out infinite alternate;
}

/* 按钮悬停效果 */
.btn-primary-hover {
  background-color: #10b981;
  transform: translateY(-2px);
}

/* 发光阴影 */
.shadow-primary-glow {
  box-shadow: 0 0 20px rgba(22, 93, 255, 0.3);
}

/* 自定义动画 */
@keyframes text-glow {
  from {
    text-shadow: 
      0 0 5px rgba(22, 93, 255, 0.5),
      0 0 10px rgba(22, 93, 255, 0.3),
      0 0 15px rgba(22, 93, 255, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
  to {
    text-shadow: 
      0 0 10px rgba(22, 93, 255, 0.7),
      0 0 20px rgba(22, 93, 255, 0.5),
      0 0 30px rgba(22, 93, 255, 0.3),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
}

/* 慢速脉冲动画 */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
}

/* 应用动画 */
.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>