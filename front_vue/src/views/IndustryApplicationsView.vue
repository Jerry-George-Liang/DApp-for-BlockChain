<template>
  <div class="py-12 bg-gray-900/0 text-gray-300">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">区块链行业应用</h1>
        <p class="text-gray-400 max-w-2xl mx-auto">
          探索区块链技术在各个行业的创新应用案例，了解技术如何重塑传统业务流程
        </p>
      </div>

      <!-- 行业分布数据可视化 -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div class="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">行业应用占比</h2>
          <div class="h-[400px]">
            <canvas ref="industryChartRef"></canvas>
          </div>
        </div>
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-6 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">应用统计</h2>
          <div class="space-y-6">
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">金融科技</span>
                <span class="text-[#165DEE] font-bold">{{ stats.finance.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-3">
                <div class="bg-[#165DEE] h-3 rounded-full transition-all duration-500 ease-out" :style="{ width: stats.finance.percentage + '%' }"></div>
              </div>
              <p class="text-sm text-gray-400 mt-1">{{ stats.finance.cases }} 个案例</p>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">供应链管理</span>
                <span class="text-[#69b1ff] font-bold">{{ stats.supply.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-3">
                <div class="bg-[#69b1ff] h-3 rounded-full transition-all duration-500 ease-out" :style="{ width: stats.supply.percentage + '%' }"></div>
              </div>
              <p class="text-sm text-gray-400 mt-1">{{ stats.supply.cases }} 个案例</p>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">数字身份</span>
                <span class="text-[#69b166] font-bold">{{ stats.identity.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-3">
                <div class="bg-[#69b166] h-3 rounded-full transition-all duration-500 ease-out" :style="{ width: stats.identity.percentage + '%' }"></div>
              </div>
              <p class="text-sm text-gray-400 mt-1">{{ stats.identity.cases }} 个案例</p>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">政务服务</span>
                <span class="text-[#FF9F1C] font-bold">{{ stats.government.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-3">
                <div class="bg-[#FF9F1C] h-3 rounded-full transition-all duration-500 ease-out" :style="{ width: stats.government.percentage + '%' }"></div>
              </div>
              <p class="text-sm text-gray-400 mt-1">{{ stats.government.cases }} 个案例</p>
            </div>
            <div>
              <div class="flex justify-between mb-2">
                <span class="font-medium">技术平台</span>
                <span class="text-[#9B5DE5] font-bold">{{ stats.technology.percentage }}%</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-3">
                <div class="bg-[#9B5DE5] h-3 rounded-full transition-all duration-500 ease-out" :style="{ width: stats.technology.percentage + '%' }"></div>
              </div>
              <p class="text-sm text-gray-400 mt-1">{{ stats.technology.cases }} 个案例</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 行业应用案例列表 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">精选应用案例</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="item in featuredCases" :key="item.id" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg border border-blue-500/30">
            <div class="h-40 bg-gray-800/70 flex items-center justify-center border-b border-blue-500/20">
              <i :class="['fa fa-' + item.icon, 'text-primary', 'text-5xl']"></i>
            </div>
            <div class="p-6">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">{{ getCategoryName(item.category) }}</span>
              <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ item.subtitle }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="feature in item.features" :key="feature" class="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded">
                  {{ feature }}
                </span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-400">
                  <i class="fa fa-circle text-[6px] mr-1"></i>
                  {{ getStageName(item.stage) }}
                </span>
                <a :href="item.url" target="_blank" class="text-primary font-medium text-sm hover:underline">了解详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 行业趋势分析 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">行业发展趋势</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <i class="fa fa-line-chart text-primary text-xl"></i>
              </div>
              <h3 class="text-xl font-bold">市场增长预测</h3>
            </div>
            <p class="text-gray-400 mb-6">根据权威机构预测，全球区块链市场规模将从2023年的800亿美元增长到2030年的3.5万亿美元，年复合增长率达65%。企业级应用将成为主要增长点。</p>
            <div class="h-[200px]">
              <canvas ref="growthChartRef"></canvas>
            </div>
          </div>
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                <i class="fa fa-lightbulb-o text-secondary text-xl"></i>
              </div>
              <h3 class="text-xl font-bold">技术发展方向</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex">
                <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i class="fa fa-check text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">Layer 2扩容解决方案成熟</h4>
                  <p class="text-gray-400 text-sm">侧链、状态通道、ZK Rollups等扩容技术将大幅提升交易处理能力</p>
                </div>
              </li>
              <li class="flex">
                <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i class="fa fa-check text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">跨链互操作性增强</h4>
                  <p class="text-gray-400 text-sm">不同区块链网络之间的资产和数据流通将更加便捷</p>
                </div>
              </li>
              <li class="flex">
                <div class="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                  <i class="fa fa-check text-green-500"></i>
                </div>
                <div>
                  <h4 class="font-bold mb-1">监管合规框架完善</h4>
                  <p class="text-gray-400 text-sm">全球范围内的区块链监管政策将逐步明确，促进合规应用发展</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 行业应用时间线 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-12 text-center">区块链应用发展历程</h2>
        <div class="relative max-w-5xl mx-auto">
          <!-- 时间线连接线 -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-blue-300 to-primary/30"></div>
          
          <!-- 时间线节点 -->
          <div v-for="(milestone, index) in timeline" :key="milestone.year" class="relative mb-16 opacity-0 animate-fade-in" :style="{ animationDelay: `${index * 0.2}s` }">
            <div class="flex items-start" :class="{ 'justify-end': index % 2 === 0 }">
              <!-- 左侧内容 -->
              <div class="w-5/12" :class="{ 'text-right': index % 2 === 0 }">
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1" :class="{ 'mr-8': index % 2 === 0, 'ml-8': index % 2 !== 0 }">
                  <div class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">{{ milestone.year }}</div>
                  <h4 class="text-xl font-bold mb-3 text-white">{{ milestone.title }}</h4>
                  <p class="text-gray-400 text-sm leading-relaxed">{{ milestone.description }}</p>
                </div>
              </div>
              
              <!-- 中间节点 -->
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-gray-800 hover:scale-110 transition-all duration-300 z-10">
                <i class="fa fa-rocket text-white text-lg"></i>
              </div>
              
              <!-- 右侧内容 -->
              <div class="w-5/12" v-if="index % 2 !== 0">
                <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-blue-500/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ml-16">
                  <div class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">{{ milestone.year }}</div>
                  <h4 class="text-xl font-bold mb-3 text-white">{{ milestone.title }}</h4>
                  <p class="text-gray-400 text-sm leading-relaxed">{{ milestone.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 专家观点 -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold mb-8">行业专家观点</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- 左边：刘鑫（腾讯专家） -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
            <div class="flex items-center mb-6">
              <img src="https://picsum.photos/id/1012/200/200" alt="刘鑫专家头像" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h3 class="font-bold">刘鑫</h3>
                <p class="text-gray-400 text-sm">腾讯安全区块链技术专家</p>
              </div>
            </div>
            <blockquote class="border-l-4 border-primary pl-4 italic text-gray-400 mb-4">
              链上数据就是客观事实，智能合约就是代码制度。区块链技术在可信计算、身份认证等领域有着广阔的应用前景，我们需要关注技术的标准化发展。
            </blockquote>
            <a href="http://m.toutiao.com/group/6990654248899838471/" target="_blank" class="text-primary hover:underline flex items-center text-sm">
              <i class="fa fa-external-link mr-1"></i> 阅读完整专访
            </a>
          </div>
          <!-- 右边：Gavin Wood（国际专家） -->
          <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
            <div class="flex items-center mb-6">
              <img src="https://picsum.photos/id/1001/200/200" alt="Gavin Wood专家头像" class="w-16 h-16 rounded-full object-cover mr-4">
              <div>
                <h3 class="font-bold">Gavin Wood</h3>
                <p class="text-gray-400 text-sm">以太坊联合创始人、Polkadot创始人</p>
              </div>
            </div>
            <blockquote class="border-l-4 border-primary pl-4 italic text-gray-400 mb-4">
              Web3代表了互联网的下一个阶段，也许还能代表人类社会的下一个阶段。在最基本的层面上，Web3是指基于区块链的去中心化在线生态系统，让用户真正拥有自己的数据和数字资产。
            </blockquote>
            <a href="http://m.toutiao.com/group/7225492621484294712/" target="_blank" class="text-primary hover:underline flex items-center text-sm">
              <i class="fa fa-external-link mr-1"></i> 了解Web3发展趋势
            </a>
          </div>
        </div>
      </div>

      <!-- 应用指南 -->
      <div>
        <h2 class="text-3xl font-bold mb-8">区块链应用实施指南</h2>
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-search text-primary text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">需求分析</h3>
              <p class="text-gray-400 text-sm">识别业务痛点，评估区块链技术适用性，明确应用目标和价值</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-puzzle-piece text-primary text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">技术选型</h3>
              <p class="text-gray-400 text-sm">选择合适的区块链平台和共识算法，设计网络架构和节点部署方案</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-code text-primary text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">开发实施</h3>
              <p class="text-gray-400 text-sm">进行智能合约开发，系统集成，安全审计，完成测试和部署上线</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fa fa-line-chart text-primary text-2xl"></i>
              </div>
              <h3 class="text-lg font-bold mb-2">运营优化</h3>
              <p class="text-gray-400 text-sm">建立运维体系，持续监控系统运行，收集用户反馈，迭代优化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

// 定义ref变量用于引用canvas元素
const industryChartRef = ref(null);
const growthChartRef = ref(null);

// 定义数据
const stats = ref({
  finance: { percentage: 35, cases: 148 },
  supply: { percentage: 22, cases: 94 },
  identity: { percentage: 18, cases: 76 },
  government: { percentage: 15, cases: 64 },
  technology: { percentage: 10, cases: 42 }
});

const featuredCases = ref([
  {
    id: 1,
    title: '蚂蚁链跨境支付平台',
    subtitle: '基于区块链的跨境支付解决方案',
    category: 'finance',
    icon: 'exchange',
    features: ['实时结算', '降低成本', '安全合规'],
    stage: 'production',
    value: '为中小企业提供高效、低成本的跨境支付服务',
    url: 'https://m.cifnews.com/trusple'
  },
  {
    id: 2,
    title: '京东物流区块链追溯平台',
    subtitle: '全链路商品溯源解决方案',
    category: 'supply',
    icon: 'truck',
    features: ['全程追溯', '防伪验证', '数据透明'],
    stage: 'production',
    value: '提升供应链透明度，保障商品质量安全',
    url: 'https://blockchain.jd.com/solutions/gongyi/'
  },
  {
    id: 3,
    title: '腾讯微众银行FISCO BCOS',
    subtitle: '企业级区块链底层平台',
    category: 'finance',
    icon: 'bank',
    features: ['自主可控', '高性能', '安全可靠'],
    stage: 'production',
    value: '为金融机构提供安全稳定的区块链技术基础设施',
    url: 'https://www.webank.com/technologyService'
  },
  {
    id: 4,
    title: '趣链科技政务服务平台',
    subtitle: '基于区块链的政务数据共享系统',
    category: 'government',
    icon: 'landmark',
    features: ['数据共享', '流程优化', '透明监管'],
    stage: 'pilot',
    value: '提升政务服务效率，实现数据可信共享',
    url: 'https://www.hyperchain.cn/solution/urbangov'
  },
  {
    id: 5,
    title: '华为云区块链服务BCS',
    subtitle: '企业级区块链云服务',
    category: 'technology',
    icon: 'cloud',
    features: ['快速部署', '弹性扩展', '安全可控'],
    stage: 'production',
    value: '降低企业使用区块链技术的门槛和成本',
    url: 'https://www.hyperchain.cn/solution/urbangov'
  },
  {
    id: 6,
    title: '百度超级链XuperChain',
    subtitle: '高性能区块链底层系统',
    category: 'technology',
    icon: 'cogs',
    features: ['高并发', '可插拔', '多语言支持'],
    stage: 'production',
    value: '为企业和开发者提供灵活高效的区块链技术平台',
    url: 'https://xuper.baidu.com/'
  }
]);

const timeline = ref([
  {
    year: '2009',
    title: '比特币网络诞生',
    description: '中本聪发布比特币白皮书，区块链技术正式问世，开创了去中心化数字货币时代'
  },
  {
    year: '2014',
    title: '以太坊项目启动',
    description: '以太坊提出智能合约概念，为区块链应用开发提供了更灵活的平台支持'
  },
  {
    year: '2017',
    title: 'ICO热潮兴起',
    description: '区块链项目首次代币发行(ICO)模式兴起，大量资金涌入区块链领域'
  },
  {
    year: '2018',
    title: '企业级区块链应用开始落地',
    description: '各大科技公司开始推出企业级区块链解决方案，金融、供应链等领域应用加速落地'
  },
  {
    year: '2020',
    title: 'DeFi生态爆发',
    description: '去中心化金融(DeFi)应用生态快速发展，创新金融服务模式不断涌现'
  },
  {
    year: '2022',
    title: 'Web3概念兴起',
    description: '基于区块链的下一代互联网(Web3)概念受到广泛关注，应用场景不断拓展'
  },
  {
    year: '2023',
    title: '以太坊Shapella升级与AI融合',
    description: '以太坊完成Shapella升级实现质押提款功能，同时AI与区块链技术融合加速，生成式AI与去中心化存储结合应用增多'
  },
  {
    year: '2024',
    title: '比特币第四次减半与CBDC发展',
    description: '比特币网络完成第四次减半，全球主要经济体央行数字货币(CBDC)试点范围扩大，监管框架逐步完善'
  },
  {
    year: '2025',
    title: '区块链与物联网深度融合',
    description: '区块链与物联网技术深度融合，实现设备间可信数据交换；跨链技术标准逐渐成熟，不同区块链生态互操作性大幅提升'
  }
]);

// 辅助函数
const getCategoryName = (category) => {
  const categoryMap = {
    finance: '金融科技',
    supply: '供应链管理',
    identity: '数字身份',
    government: '政务服务',
    technology: '技术平台',
    healthcare: '医疗健康',
    education: '教育培训',
    logistics: '物流运输',
    energy: '能源环保'
  };
  return categoryMap[category] || category;
};

const getStageName = (stage) => {
  const stageMap = {
    concept: '概念验证',
    pilot: '试点阶段',
    production: '正式运行'
  };
  return stageMap[stage] || stage;
};

// 图表实例
let industryChart = null;
let growthChart = null;

// 初始化图表
const initCharts = () => {
  // 行业分布图表 - 改为柱状图
  if (industryChartRef.value) {
    const ctx = industryChartRef.value.getContext('2d');
    industryChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['金融科技', '供应链管理', '数字身份', '政务服务', '技术平台'],
        datasets: [{
          label: '应用占比（%）',
          data: [
            stats.value.finance.percentage,
            stats.value.supply.percentage,
            stats.value.identity.percentage,
            stats.value.government.percentage,
            stats.value.technology.percentage
          ],
          backgroundColor: [
            '#165DFF',
            '#69b1ff',
            '#17C3B2',
            '#FF9F1C',
            '#9B5DE5'
          ],
          borderRadius: 8,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.dataset.label || '';
                const value = context.raw || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 40,
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
  
  // 增长趋势图表
  if (growthChartRef.value) {
    const ctx = growthChartRef.value.getContext('2d');
    growthChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
          label: '市场规模(十亿美元)',
          data: [15, 28, 45, 80, 150, 220],
          borderColor: '#165DFF',
          backgroundColor: 'rgba(22, 93, 255, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: 'rgba(0, 0, 0, 0.05)'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }
};

// 组件挂载时初始化图表
onMounted(() => {
  initCharts();
});
</script>

<style scoped>
/* 案例卡片悬停效果 */
.bg-white.rounded-xl {
  transition: all 0.3s ease;
}

/* 时间线样式 */
@media (max-width: 768px) {
  .absolute.left-1\/2 {
    left: 2rem;
  }
  .w-5\/12 {
    width: calc(100% - 4rem);
  }
  .relative.flex.items-start {
    justify-content: flex-end !important;
  }
  .pl-8,
  .pr-8 {
    padding-left: 8rem !important;
    padding-right: 0 !important;
  }
  .text-right {
    text-align: left !important;
  }
  .justify-end {
    justify-content: flex-start !important;
  }
  .mr-8,
  .ml-8 {
    margin: 0 0 0 8rem !important;
  }
}

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

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .animate-fade-in {
    animation-delay: 0s !important;
  }
}
</style>