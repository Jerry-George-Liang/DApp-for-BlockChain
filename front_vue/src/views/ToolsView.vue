<template>
  <div class="py-12 bg-gray-900/0 text-gray-300">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">区块链工具聚合</h1>
        <p class="text-text-medium max-w-2xl mx-auto">
          精选区块链开发与使用的必备工具，从数据查询到资产管理，一站式获取
        </p>
      </div>

      <!-- 工具分类导航 -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-6 mb-10 border border-blue-500/30">
        <div class="flex flex-wrap gap-4">
          <button 
            v-for="category in categories" 
            :key="category.id"
            :class="['px-6 py-3 rounded-lg transition-all font-medium', 
                    activeCategory === category.id ? 'bg-primary text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300']"
            @click="switchCategory(category.id)"
          >
            {{ category.name }}
          </button>
        </div>
      </div>

      <!-- 工具列表 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="tool in filteredTools" 
          :key="tool.id"
          :id="tool.id"
          class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:scale-[1.02] border border-blue-500/30"
        >
          <!-- 工具卡片头部 -->
          <div class="p-6 border-b border-blue-500/20">
            <div>
              <h3 class="text-xl font-semibold mb-2">{{ tool.name }}</h3>
              <p class="text-text-medium text-sm">{{ tool.description }}</p>
            </div>
          </div>

          <!-- 工具卡片内容 -->
          <div class="p-6">
            <!-- 评分 -->
            <div class="mb-4">
              <div class="flex items-center mb-1">
                <span class="font-medium mr-2">评分:</span>
                <div class="flex">
                  <i 
                    v-for="star in 5" 
                    :key="star"
                    :class="['fa', 
                            star <= tool.rating ? 'fa-star text-yellow-400' : 'fa-star text-gray-300', 
                            'text-lg']"
                  ></i>
                </div>
                <span class="ml-2 text-sm text-gray-400">({{ tool.rating.toFixed(1) }})</span>
              </div>
              <div class="flex justify-between items-center text-xs text-gray-500">
                <span>用户评分</span>
                <span>{{ tool.reviews }} 条评价</span>
              </div>
            </div>

            <!-- 标签 -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tag in tool.tags" 
                :key="tag"
                class="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <!-- 操作按钮 -->
            <div class="flex gap-3">
              <a 
                :href="tool.website" 
                target="_blank"
                class="flex-1 bg-primary text-white py-2 px-4 rounded-lg text-center hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <i class="fa fa-external-link-alt mr-2"></i>
                访问官网
              </a>
              <button 
                class="bg-gray-700 border border-blue-500/20 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors text-gray-300"
                @click="openTutorial(tool.id)"
              >
                <i class="fa fa-book text-primary"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门工具教程 -->
      <div id="tutorial-section" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
        <h2 class="text-2xl font-bold mb-8 text-center">热门工具使用教程</h2>
        <div class="space-y-10">
          <!-- MetaMask教程 -->
          <div v-if="activeTutorial === 'metamask' || !activeTutorial">
            <h3 class="text-xl font-semibold mb-6">MetaMask钱包使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">安装设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>在浏览器中安装MetaMask插件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建新钱包或导入现有钱包</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>安全备份助记词（非常重要）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>设置强密码保护账户</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">添加网络</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>点击网络选择下拉菜单</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>选择"添加网络"选项</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>添加以太坊主网或测试网络配置</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>验证网络是否成功添加</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">使用技巧</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用地址簿保存常用地址</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>定期备份助记词和私钥</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>交易前仔细检查收款地址</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用硬件钱包增强安全性</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Etherscan教程 -->
          <div v-if="activeTutorial === 'etherscan'">
            <h3 class="text-xl font-semibold mb-6">Etherscan区块浏览器使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">基础查询</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>在搜索框中输入地址、交易哈希或区块号</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>查看账户余额、交易历史和代币持有情况</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>分析交易详情，包括Gas费用和状态</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>查看区块信息和矿工奖励</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">合约交互</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>通过搜索框查找智能合约地址</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>在"Contract"标签页查看合约代码</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>使用"Read Contract"功能调用只读方法</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>通过"Write Contract"发送交易调用可写方法</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级功能</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用Token Approvals检查授权情况</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建自定义交易图表和分析</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>订阅地址活动通知</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用API获取区块链数据</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- OpenZeppelin教程 -->
          <div v-if="activeTutorial === 'openzeppelin'">
            <h3 class="text-xl font-semibold mb-6">OpenZeppelin Defender使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">账户设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>注册OpenZeppelin Defender账户</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建团队和项目</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>连接管理员钱包</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>设置团队成员权限</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">合约监控</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>在Monitors部分导入智能合约</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>设置关键事件和函数的监控规则</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>配置通知渠道（邮件、Slack等）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>测试监控触发机制</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">自动响应</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>在Autotasks中创建自动化脚本</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>编写防御逻辑和响应函数</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>设置触发条件（时间或事件）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>部署并测试自动响应系统</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Blockchair教程 -->
          <div v-if="activeTutorial === 'blockchair'">
            <h3 class="text-xl font-semibold mb-6">Blockchair多链浏览器使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">基础查询</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>选择要查询的区块链网络</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>在搜索框输入地址、交易哈希或区块号</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>查看交易详情和区块信息</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>浏览地址的交易历史</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">多链对比</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>切换不同区块链网络</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>比较不同链的交易速度和费用</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>查看跨链资产流动情况</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>分析不同链的矿工收入</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级分析</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用图表分析区块链数据趋势</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>导出数据进行离线分析</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>设置价格提醒和通知</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用API获取实时数据</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Dune Analytics教程 -->
          <div v-if="activeTutorial === 'dune'">
            <h3 class="text-xl font-semibold mb-6">Dune Analytics数据分析教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">基础查询</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>注册并登录Dune Analytics账户</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>浏览现有仪表盘和查询</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>使用SQL编写简单查询</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>保存和分享查询结果</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">数据可视化</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>选择图表类型（柱状图、折线图等）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>配置图表参数和样式</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>创建自定义仪表盘</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>添加多个图表到仪表盘</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级技巧</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用CTE和子查询优化查询</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建和使用自定义表</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>设置查询自动更新</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用Dune API集成到其他应用</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Ledger Live教程 -->
          <div v-if="activeTutorial === 'ledger'">
            <h3 class="text-xl font-semibold mb-6">Ledger Live硬件钱包使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">初始设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>下载并安装Ledger Live软件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>连接Ledger硬件钱包到电脑</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>初始化钱包并创建助记词</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>设置PIN码保护</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">资产管理</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>添加和管理加密货币</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>查看资产余额和交易历史</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>发送和接收加密货币</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用Ledger进行交易签名</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级功能</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>更新Ledger固件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>使用Ledger连接DApp</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>管理NFT资产</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>恢复钱包到新设备</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Argent教程 -->
          <div v-if="activeTutorial === 'argent'">
            <h3 class="text-xl font-semibold mb-6">Argent智能合约钱包使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">账户创建</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>下载Argent钱包应用</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建新账户并设置生物识别</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>设置社交恢复联系人</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>备份恢复码</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">日常使用</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>接收和发送加密货币</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>管理和交换不同代币</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>连接到Layer2网络</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用DApp浏览器访问去中心化应用</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级安全</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>设置交易限制和权限</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>使用社交恢复功能</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>冻结和恢复账户</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>管理智能合约权限</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Remix IDE教程 -->
          <div v-if="activeTutorial === 'remix'">
            <h3 class="text-xl font-semibold mb-6">Remix IDE智能合约开发教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">环境设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>访问Remix IDE网页版</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建新的Solidity文件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>配置编译器版本</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>安装必要的插件</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">开发编译</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>编写Solidity智能合约代码</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>编译合约并检查错误</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>使用内置调试器调试合约</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>运行单元测试</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">部署交互</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>选择部署环境（JavaScript VM或测试网）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>部署合约到选定环境</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>使用交互面板调用合约方法</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>导出合约ABI和字节码</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Hardhat教程 -->
          <div v-if="activeTutorial === 'hardhat'">
            <h3 class="text-xl font-semibold mb-6">Hardhat开发框架使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">项目初始化</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用npm安装Hardhat</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>初始化Hardhat项目</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>配置hardhat.config.js文件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>安装必要的插件</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">开发测试</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>在contracts目录编写合约</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>在test目录编写测试用例</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>运行测试命令验证合约</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用Hardhat控制台调试</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">部署和验证</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>编译合约</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>编写部署脚本</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>部署到测试网或主网</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用Hardhat Etherscan插件验证合约</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- OpenSea教程 -->
          <div v-if="activeTutorial === 'opensea'">
            <h3 class="text-xl font-semibold mb-6">OpenSea NFT市场使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">账户设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>访问OpenSea官网</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>使用MetaMask钱包登录</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>完善个人资料</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>连接其他钱包（可选）</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">购买和出售</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>浏览和搜索NFT藏品</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>出价或直接购买NFT</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>创建NFT出售列表</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>接受出价或取消出售</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">NFT铸造</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>点击"Create"按钮开始铸造</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>上传NFT媒体文件</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>填写NFT详情和属性</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>选择区块链并铸造NFT</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Nansen教程 -->
          <div v-if="activeTutorial === 'nansen'">
            <h3 class="text-xl font-semibold mb-6">Nansen NFT分析平台使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">账户设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>注册Nansen账户</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>选择合适的订阅计划</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>连接钱包查看资产</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>设置仪表板偏好</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">NFT分析</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>使用钱包标签功能识别地址类型</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>分析NFT项目的交易数据</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>跟踪鲸鱼钱包的NFT活动</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>查看NFT地板价和交易量趋势</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">高级功能</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>设置NFT价格警报</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>创建自定义监控列表</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>导出分析数据</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>使用API集成到其他工具</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Rarible教程 -->
          <div v-if="activeTutorial === 'rarible'">
            <h3 class="text-xl font-semibold mb-6">Rarible NFT平台使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">账户设置</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>访问Rarible官网</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>连接钱包登录</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>设置用户资料</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>选择偏好的区块链</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">NFT交易</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>浏览和搜索NFT藏品</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>购买或出价NFT</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>出售自己的NFT</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>查看交易历史</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">无代码铸造</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>点击"Create"按钮</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>选择铸造类型（单版或多版）</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>上传媒体文件并填写详情</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>设置版税和销售选项</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Coin Center教程 -->
          <div v-if="activeTutorial === 'coincenter'">
            <h3 class="text-xl font-semibold mb-6">Coin Center政策研究使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">资源浏览</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>访问Coin Center官网</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>浏览政策研究报告</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>查看监管指南</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>阅读博客文章和新闻</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">政策分析</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>搜索特定国家或地区的政策</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>分析政策对加密行业的影响</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>查看政策建议和倡导内容</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>了解监管趋势</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">参与倡导</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>了解当前的倡导活动</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>支持政策倡议</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>订阅政策更新</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>参与社区讨论</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <!-- Chainalysis教程 -->
          <div v-if="activeTutorial === 'chainalysis'">
            <h3 class="text-xl font-semibold mb-6">Chainalysis区块链情报使用教程</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">产品了解</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>访问Chainalysis官网</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>了解不同产品和解决方案</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>查看案例研究</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>请求产品演示</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">合规解决方案</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>了解AML和KYC解决方案</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>查看风险评估工具</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>了解交易监控功能</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>查看调查工具</span>
                  </li>
                </ol>
              </div>
              <div class="bg-gray-700/50 p-6 rounded-lg border border-blue-500/20">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                  <span class="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">资源中心</span>
                </div>
                <ol class="space-y-3 text-sm text-text-medium">
                  <li class="flex items-start">
                    <span class="font-medium mr-2">1.</span>
                    <span>浏览研究报告和白皮书</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">2.</span>
                    <span>查看行业新闻和分析</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">3.</span>
                    <span>了解监管趋势</span>
                  </li>
                  <li class="flex items-start">
                    <span class="font-medium mr-2">4.</span>
                    <span>访问开发者资源</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 分类数据
const categories = ref([
  { id: 'all', name: '全部' },
  { id: 'data', name: '数据查询' },
  { id: 'wallet', name: '资产管理' },
  { id: 'dev', name: '开发审计' },
  { id: 'nft', name: 'NFT相关' },
  { id: 'policy', name: '政策查询' }
])

// 当前激活的分类
const activeCategory = ref('all')

// 激活的教程
const activeTutorial = ref(null)

// 工具数据
const tools = ref([
  // 数据查询工具
  {
    id: 'etherscan',
    name: 'Etherscan',
    description: '以太坊区块浏览器，提供交易查询、合约验证、代币信息等功能',
    icon: 'globe',
    rating: 4.9,
    reviews: 1245,
    category: 'data',
    tags: ['区块浏览器', '数据查询', '合约验证'],
    website: 'https://goto.etherscan.com/blocks'
  },
  {
    id: 'blockchair',
    name: 'Blockchair',
    description: '多链区块浏览器，支持比特币、以太坊等多种区块链数据分析',
    icon: 'database',
    rating: 4.7,
    reviews: 832,
    category: 'data',
    tags: ['多链支持', '数据分析', '可视化'],
    website: 'https://blockchair.com'
  },
  {
    id: 'dune',
    name: 'Dune Analytics',
    description: '区块链数据分析平台，支持自定义SQL查询和数据可视化',
    icon: 'chart-line',
    rating: 4.8,
    reviews: 567,
    category: 'data',
    tags: ['数据分析', 'SQL查询', '可视化报表'],
    website: 'https://dune.com'
  },
  
  // 资产管理工具
  {
    id: 'metamask',
    name: 'MetaMask',
    description: '最流行的以太坊钱包浏览器插件，支持资产管理和DApp交互',
    icon: 'wallet',
    rating: 4.6,
    reviews: 2567,
    category: 'wallet',
    tags: ['钱包', 'DApp交互', '资产管理'],
    website: 'https://blog.csdn.net/m0_73094011/article/details/135854126'
  },
  {
    id: 'ledger',
    name: 'Ledger Live',
    description: 'Ledger硬件钱包官方软件，提供安全的资产管理和交易签名',
    icon: 'shield-alt',
    rating: 4.8,
    reviews: 1834,
    category: 'wallet',
    tags: ['硬件钱包', '安全', '多链支持'],
    website: 'https://cn-ledger.com/'
  },
  {
    id: 'argent',
    name: 'Argent',
    description: '以太坊智能合约钱包，提供社交恢复和高级安全功能',
    icon: 'credit-card',
    rating: 4.5,
    reviews: 987,
    category: 'wallet',
    tags: ['智能合约钱包', '社交恢复', 'Layer2'],
    website: 'https://www.ready.co/'
  },

  
  // 开发审计工具
  {
    id: 'openzeppelin',
    name: 'OpenZeppelin Defender',
    description: '智能合约安全管理平台，提供监控、自动化和访问控制',
    icon: 'lock',
    rating: 4.9,
    reviews: 765,
    category: 'dev',
    tags: ['安全工具', '合约监控', '自动化'],
    website: 'https://defender.openzeppelin.com'
  },
  {
    id: 'remix',
    name: 'Remix IDE',
    description: '基于浏览器的Solidity IDE，提供智能合约开发、编译和部署功能',
    icon: 'code',
    rating: 4.7,
    reviews: 1432,
    category: 'dev',
    tags: ['开发工具', 'IDE', '智能合约'],
    website: 'https://remix.ethereum.org'
  },
  {
    id: 'hardhat',
    name: 'Hardhat',
    description: '以太坊开发环境，提供编译、测试、部署和调试功能',
    icon: 'terminal',
    rating: 4.8,
    reviews: 1056,
    category: 'dev',
    tags: ['开发框架', '测试', '调试'],
    website: 'https://hardhat.org'
  },
  
  // NFT相关工具
  {
    id: 'opensea',
    name: 'OpenSea',
    description: '最大的NFT市场平台，支持创建、购买和出售数字收藏品',
    icon: 'paint-brush',
    rating: 4.5,
    reviews: 3245,
    category: 'nft',
    tags: ['NFT市场', '数字藏品', '铸造'],
    website: 'https://opensea.io'
  },
  {
    id: 'nansen',
    name: 'Nansen',
    description: 'NFT分析平台，提供钱包标签、交易数据和市场洞察',
    icon: 'microscope',
    rating: 4.6,
    reviews: 678,
    category: 'nft',
    tags: ['NFT分析', '钱包标签', '市场洞察'],
    website: 'https://www.nansen.ai'
  },
  {
    id: 'rarible',
    name: 'Rarible',
    description: 'NFT创建和交易平台，支持多链和无代码NFT铸造',
    icon: 'gem',
    rating: 4.4,
    reviews: 987,
    category: 'nft',
    tags: ['NFT市场', '无代码铸造', '多链'],
    website: 'https://rarible.com'
  },
  
  // 政策查询工具
  {
    id: 'coincenter',
    name: 'Coin Center',
    description: '加密货币政策研究和倡导组织，提供政策分析和监管指南',
    icon: 'landmark',
    rating: 4.7,
    reviews: 345,
    category: 'policy',
    tags: ['政策研究', '监管指南', '倡导'],
    website: 'https://www.coincenter.org'
  },
  {
    id: 'chainanalysis',
    name: 'Chainalysis',
    description: '区块链情报平台，提供合规解决方案和风险评估',
    icon: 'search-dollar',
    rating: 4.8,
    reviews: 567,
    category: 'policy',
    tags: ['合规工具', '风险评估', '情报'],
    website: 'https://www.chainalysis.com'
  }
])

// 切换分类
const switchCategory = (categoryId) => {
  activeCategory.value = categoryId
}

// 过滤后的工具列表
const filteredTools = computed(() => {
  if (activeCategory.value === 'all') {
    return tools.value
  }
  return tools.value.filter(tool => tool.category === activeCategory.value)
})

// 打开教程
const openTutorial = (toolId) => {
  activeTutorial.value = activeTutorial.value === toolId ? null : toolId
  
  // 滚动到教程区域
  if (activeTutorial.value) {
    setTimeout(() => {
      const tutorialSection = document.getElementById('tutorial-section')
      if (tutorialSection) {
        tutorialSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }
}

</script>

<style scoped>
/* 工具卡片悬停效果 */
.bg-white.rounded-xl {
  transition: all 0.3s ease;
}

/* 评分星星动画 */
.fa-star {
  transition: all 0.2s ease;
}

/* 响应式调整 */
@media (max-width: 1024px) {
  .grid-cols-3 {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .grid-cols-3,
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .flex-wrap {
    justify-content: center;
  }
}
</style>