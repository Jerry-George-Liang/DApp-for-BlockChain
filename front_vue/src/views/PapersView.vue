<template>
  <div class="papers-aggregation bg-gray-900/0 text-gray-300">
    <!-- 头部导航 -->
    <header class="bg-gray-800/0 backdrop-blur-sm shadow-md border-b border-blue-500/30">
      <div class="container mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-center text-primary-color">区块链技术论文聚合平台</h1>
      </div>
    </header>

    <!-- 主要内容区 -->
    <main class="container mx-auto px-4 py-8">
      <!-- 可视化数据区 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 text-center">论文发布时间分布</h2>
        <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
          <div class="chart-container">
            <canvas ref="papersChartRef"></canvas>
          </div>
        </div>
      </section>

      <!-- 中文论文区 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 border-l-4 pl-4 border-primary-color">中文论文</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 论文卡片1 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">区块链服务网络的构建机理与技术实现</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>单志广等</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2023年</p>
              <p class="text-gray-400"><span class="font-medium">来源期刊：</span>《自动化学报》</p>
            </div>
            <p class="text-gray-400 mb-4">本文提出了一种面向服务导向的区块链网络架构，通过分层设计理念将区块链底层技术与上层应用解耦。该架构采用"链上+链下"协同模式，大幅提升系统性能并降低存储成本。</p>
            <a
              href="https://kns.cnki.net/kcms2/article/abstract?v=LYi8dJWcB0W956RwEXuk_6P6xmIcP5hWEYfjD1-equ-sPYdUDSMGA8Q1GHGIGDPOmijDuC--GSWYIRxsd0aMdUJ60ZKv-XqyePWoou247mqQjKnzVn___Fg7_o0xGBN3Legxm-tUuqq0JvRsKGVYKHQtcEHh8nQ-NC5rsvwedUnHxBohSka17Q==&uniplatform=NZKPT&language=CHS"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              查看原文
            </a>
          </div>

          <!-- 论文卡片2 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">区块链数据安全服务综述</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>关志等</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2024年</p>
              <p class="text-gray-400"><span class="font-medium">来源期刊：</span>《计算机研究与发展》</p>
            </div>
            <p class="text-gray-400 mb-4">系统梳理了区块链数据安全服务的研究现状与技术挑战。论文从数据安全生命周期视角，分析了区块链环境下的数据保护机制，包括加密存储、访问控制、隐私保护等核心技术。</p>
            <a
              href="https://kns.cnki.net/kcms2/article/abstract?v=LYi8dJWcB0X2DjirtRKIj0feDQwWiIllOo_8zThTZjwnmctK0gS4mGGUjFD5HigG9IwDjKq11sWARLOcJlHFq4UZAMNcuPl1jvZUN-AWeUQTs3ngDOJgu0phbASb9D66JD13dHxK461arXcFyxxYQ0PvU6EajttFN3irSOA-yoG_XAo1kNXlBw==&uniplatform=NZKPT&language=CHS"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              查看原文
            </a>
          </div>

          <!-- 论文卡片3 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">区块链跨链协议综述</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>吴昊等</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2024年</p>
              <p class="text-gray-400"><span class="font-medium">来源期刊：</span>《计算机学报》</p>
            </div>
            <p class="text-gray-400 mb-4">全面综述了区块链跨链协议的技术发展脉络。论文详细分析了哈希锁定、中继链、侧链等主流跨链机制的技术原理与安全特性，重点比较了不同方案在性能、安全性、去中心化程度等方面的权衡。</p>
            <a
              href="https://kns.cnki.net/kcms2/article/abstract?v=LYi8dJWcB0WaUCrQFLygg0U7KWBQwQuNkvwYNzuQbYHyOHYRNPXBJXYeZNp0adooJIOonKNN3euSHwJoDUocst5YCv2zOZVOftAngDOgcHVxb-c1NA3qznuK4lMQOaZeUmOX2oaKg-rpLJtPu5U5V8roVDB1afFuZCmJcp_bT2IKpn0NaoIIVg==&uniplatform=NZKPT&language=CHS"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              查看原文
            </a>
          </div>

          <!-- 论文卡片4 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">区块链系统的存储可扩展性综述</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>张海等</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2025年</p>
              <p class="text-gray-400"><span class="font-medium">来源期刊：</span>《软件学报》</p>
            </div>
            <p class="text-gray-400 mb-4">聚焦区块链系统存储可扩展性这一核心挑战。论文系统分析了区块链存储瓶颈的成因，详细梳理了状态压缩、分片存储、链下存储等主流优化技术。深入比较了不同存储方案在读写性能、成本开销、数据可用性等方面的表现。</p>
            <a
              href="https://kns.cnki.net/kcms2/article/abstract?v=LYi8dJWcB0WFy_OGfVcx7vyLtGhUSQeZMGl2mwNBgJ5YPu4q5l_8CBVQULoNsIenXIYqBwCzHlw-vQYgd3FCYLUt0vtrpBsmcSH0ak93UWVd6run8VjOcX1cWePwyvJ1l1pJCiSrQX9Ga4zpv2ZaGGBkCpJP499faQvvdkhH02v2Bi2YaM3JZw==&uniplatform=NZKPT&language=CHS"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              查看原文
            </a>
          </div>
        </div>
      </section>

      <!-- 英文论文区 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6 border-l-4 pl-4 border-primary-color">英文论文</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- 论文卡片1 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">Bitcoin: A Peer-to-Peer Electronic Cash System</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>Satoshi Nakamoto</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2008年</p>
              <p class="text-gray-400"><span class="font-medium">来源：</span>Original Whitepaper</p>
            </div>
            <p class="text-gray-400 mb-4">这是区块链技术的奠基之作，提出了一种去中心化的电子现金系统。论文详细描述了比特币的核心设计，包括区块链数据结构、工作量证明共识机制、点对点网络等关键技术，为后续所有区块链项目奠定了基础。</p>
            <a
              href="https://bitcoinpaper.org/"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              View Original
            </a>
          </div>

          <!-- 论文卡片2 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">The Bitcoin Backbone Protocol: Analysis and Applications</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>Juan A. Garay, Aggelos Kiayias, Nikos Leonardos</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2014年</p>
              <p class="text-gray-400"><span class="font-medium">来源：</span>EUROCRYPT 2015</p>
            </div>
            <p class="text-gray-400 mb-4">这是一篇重要的区块链学术论文，对比特币的核心协议进行了形式化分析。论文提出了"比特币骨干协议"的概念，证明了在一定假设下，比特币的共识机制能够保证区块链的一致性和活性，为区块链技术的安全性提供了理论基础。</p>
            <a
              href="https://eprint.iacr.org/2014/765.pdf"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              View Original
            </a>
          </div>

          <!-- 论文卡片3 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">Zerocash: Decentralized Anonymous Payments from Bitcoin</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers, Eran Tromer, Madars Virza</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2014年</p>
              <p class="text-gray-400"><span class="font-medium">来源：</span>IEEE S&P 2014</p>
            </div>
            <p class="text-gray-400 mb-4">这篇论文提出了Zerocash协议，是第一个实现完全匿名交易的区块链系统。论文结合了零知识证明和zk-SNARKs技术，实现了交易金额和发送者/接收者身份的完全匿名，为隐私保护型加密货币奠定了基础。</p>
            <a
              href="https://eprint.iacr.org/2014/349.pdf"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              View Original
            </a>
          </div>

          <!-- 论文卡片4 -->
          <div class="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg card border border-blue-500/30">
            <h3 class="text-xl font-semibold mb-3 text-primary-color">A Secure Sharding Protocol For Open Blockchains</h3>
            <div class="mb-4">
              <p class="text-gray-400"><span class="font-medium">作者：</span>Lodovico Giaretta, Alberto Sonnino, Mustafa Al-Bassam, Shehar Bano, George Danezis, Aggelos Kiayias, Dwight Guth</p>
              <p class="text-gray-400"><span class="font-medium">发布时间：</span>2016年</p>
              <p class="text-gray-400"><span class="font-medium">来源：</span>CCS 2016</p>
            </div>
            <p class="text-gray-400 mb-4">这篇论文提出了一种安全的区块链分片协议，旨在解决区块链的可扩展性问题。论文详细描述了分片的设计原则、共识机制、跨片通信等关键技术，为区块链分片技术的发展奠定了基础，是可扩展性研究领域的重要成果。</p>
            <a
              href="https://eprint.iacr.org/2016/889.pdf"
              target="_blank"
              class="btn-primary text-white px-4 py-2 rounded-md inline-block"
            >
              View Original
            </a>
          </div>
        </div>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800/0 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="mb-2">© 2025 区块链技术论文聚合平台. 保留所有权利.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Chart from 'chart.js/auto'; // 引入Chart.js

// 定义canvas引用
const papersChartRef = ref(null);
// 声明chart实例，用于销毁和更新
let papersChart = null;

// 论文数据（静态数据，无需响应式）
const papersData = {
  labels: ['2008年', '2014年', '2016年', '2023年', '2024年', '2025年'],
  datasets: [{
    label: '论文数量',
    data: [1, 2, 1, 1, 2, 1],
    backgroundColor: [
      'rgba(37, 99, 235, 0.6)',
      'rgba(37, 99, 235, 0.6)',
      'rgba(37, 99, 235, 0.6)',
      'rgba(37, 99, 235, 0.7)',
      'rgba(37, 99, 235, 0.7)',
      'rgba(37, 99, 235, 0.8)'
    ],
    borderColor: [
      'rgba(37, 99, 235, 1)',
      'rgba(37, 99, 235, 1)',
      'rgba(37, 99, 235, 1)',
      'rgba(37, 99, 235, 1)',
      'rgba(37, 99, 235, 1)',
      'rgba(37, 99, 235, 1)'
    ],
    borderWidth: 1
  }]
};

// 论文详细信息
const papersDetails = {
  '2023年': [
    {
      title: '区块链服务网络的构建机理与技术实现',
      author: '王飞跃等',
      journal: '《自动化学报》',
      abstract: '本文提出了一种面向服务导向的区块链网络架构，通过分层设计理念将区块链底层技术与上层应用解耦。'
    }
  ],
  '2024年': [
    {
      title: '区块链数据安全服务综述',
      author: '李建中等',
      journal: '《计算机研究与发展》',
      abstract: '系统梳理了区块链数据安全服务的研究现状与技术挑战。'
    },
    {
      title: '区块链跨链协议综述',
      author: '刘宏等',
      journal: '《计算机学报》',
      abstract: '全面综述了区块链跨链协议的技术发展脉络。'
    }
  ],
  '2025年': [
    {
      title: '区块链系统的存储可扩展性综述',
      author: '张海等',
      journal: '《软件学报》',
      abstract: '聚焦区块链系统存储可扩展性这一核心挑战。'
    }
  ],
  '2008年': [
    {
      title: 'Bitcoin: A Peer-to-Peer Electronic Cash System',
      author: 'Satoshi Nakamoto',
      journal: 'Original Whitepaper',
      abstract: '这是区块链技术的奠基之作，提出了一种去中心化的电子现金系统。'
    }
  ],
  '2014年': [
    {
      title: 'The Bitcoin Backbone Protocol: Analysis and Applications',
      author: 'Juan A. Garay, Aggelos Kiayias, Nikos Leonardos',
      journal: 'EUROCRYPT 2015',
      abstract: '对比特币的核心协议进行了形式化分析，提出了"比特币骨干协议"的概念。'
    },
    {
      title: 'Zerocash: Decentralized Anonymous Payments from Bitcoin',
      author: 'Eli Ben-Sasson, et al.',
      journal: 'IEEE S&P 2014',
      abstract: '提出了Zerocash协议，实现了完全匿名的区块链交易。'
    }
  ],
  '2016年': [
    {
      title: 'A Secure Sharding Protocol For Open Blockchains',
      author: 'Lodovico Giaretta, et al.',
      journal: 'CCS 2016',
      abstract: '提出了一种安全的区块链分片协议，解决区块链可扩展性问题。'
    }
  ]
};

// 初始化图表
const initChart = () => {
  if (!papersChartRef.value) return;
  const ctx = papersChartRef.value.getContext('2d');
  
  // 销毁已有实例，避免重复渲染
  if (papersChart) {
    papersChart.destroy();
  }

  papersChart = new Chart(ctx, {
    type: 'bar',
    data: papersData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            title: (tooltipItems) => tooltipItems[0].label,
            label: (context) => {
              const year = context.label;
              const papers = papersDetails[year];
              let details = `论文数量: ${context.raw}篇`;
              // 移动端简化tooltip内容
              if (window.innerWidth >= 768) {
                papers.forEach((paper, index) => {
                  details += `\n${index + 1}. ${paper.title}`;
                });
              }
              return details;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0
          },
          title: {
            display: true,
            text: '论文数量'
          }
        },
        x: {
          title: {
            display: true,
            text: '发布年份'
          }
        }
      }
    }
  });
};

// 响应式处理resize
const handleResize = () => {
  if (papersChart) {
    papersChart.update();
  }
};

// 组件挂载时初始化图表
onMounted(() => {
  initChart();
  window.addEventListener('resize', handleResize);
});

// 组件卸载时销毁图表和监听事件，避免内存泄漏
onUnmounted(() => {
  if (papersChart) {
    papersChart.destroy();
  }
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
/* 自定义变量 */
:root {
  --primary-color: #2563eb;
  --primary-light: #dbeafe;
  --primary-dark: #1d4ed8;
  --text-color: #e5e7eb;
  --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --hover-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.papers-aggregation {
  font-family: 'Noto Sans SC', sans-serif;
  color: var(--text-color);
  background-color: transparent;
  min-height: 100vh;
}

/* 卡片样式 */
.card {
  transition: all 0.3s ease;
  box-shadow: var(--card-shadow);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--hover-shadow);
}

/* 按钮样式 */
.btn-primary {
  background-color: var(--primary-color);
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

/* 图表容器 */
.chart-container {
  position: relative;
  height: 400px;
  width: 100%;
}

/* 自定义颜色类（替代行内style） */
.text-primary-color {
  color: var(--primary-color);
}

.border-primary-color {
  border-color: var(--primary-color);
}

/* 响应式调整 */
@media (max-width: 768px) {
  .chart-container {
    height: 300px;
  }
}
</style>