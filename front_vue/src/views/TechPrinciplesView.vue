<template>
  <div class="py-12 bg-gray-900/0">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">区块链技术原理拆解</h1>
        <p class="text-text-medium max-w-2xl mx-auto">
          深入解析区块链核心技术原理，从底层架构到前沿扩展方案
        </p>
      </div>

      <!-- 分类标签切换 -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-6 mb-10 border border-blue-500/30">
        <div class="flex flex-wrap gap-4">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['px-6 py-3 rounded-lg transition-all font-medium', 
                    activeTab === tab.id ? 'bg-primary text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300']"
            @click="switchTab(tab.id)"
          >
            {{ tab.name }}
          </button>
        </div>
      </div>

      <!-- 公链技术内容 -->
      <div v-show="activeTab === 'blockchain'" class="space-y-10">
        <!-- 区块链基础架构 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">区块链基础架构</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">核心组成部分</h3>
              <ul class="space-y-5">
                <li class="flex items-start group">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <i class="fa fa-database text-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">分布式账本</h4>
                    <p class="text-text-medium text-base mt-1 group-hover:text-blue-300 transition-colors duration-300">
                      区块链核心数据结构，通过多副本机制实现去中心化存储，每个节点保存完整账本副本。
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">不可篡改</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">透明可追溯</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">链式结构</span>
                    </div>
                  </div>
                </li>
                <li class="flex items-start group">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <i class="fa fa-handshake-o text-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">共识机制</h4>
                    <p class="text-text-medium text-base mt-1 group-hover:text-blue-300 transition-colors duration-300">
                      区块链决策核心，确保所有节点对账本状态达成一致，解决分布式系统拜占庭将军问题。
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">PoW</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">PoS</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">DPoS</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">PBFT</span>
                    </div>
                  </div>
                </li>
                <li class="flex items-start group">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <i class="fa fa-lock text-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">密码学</h4>
                    <p class="text-text-medium text-base mt-1 group-hover:text-blue-300 transition-colors duration-300">
                      区块链安全基石，通过多种算法确保交易安全、完整性和不可否认性。
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">哈希函数</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">非对称加密</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">数字签名</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">Merkle树</span>
                    </div>
                  </div>
                </li>
                <li class="flex items-start group">
                  <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <i class="fa fa-globe text-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">P2P网络</h4>
                    <p class="text-text-medium text-base mt-1 group-hover:text-blue-300 transition-colors duration-300">
                      区块链通信基础设施，实现节点间直接通信，无需中心化服务器，确保去中心化和高可用性。
                    </p>
                    <div class="flex flex-wrap gap-2 mt-2">
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">去中心化</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">自组织</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">容错性</span>
                      <span class="px-2 py-1 bg-blue-500/20 rounded text-sm text-blue-400 hover:bg-blue-500/30 transition-colors">抗审查</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="bg-gray-700/50 rounded-lg p-6 border border-blue-500/20">
              <h3 class="text-xl font-semibold mb-4">区块链架构图</h3>
              <div class="h-full flex items-center justify-center">
                <div class="flex flex-col items-center justify-start space-y-6 w-full max-w-md h-full">
                  <i class="fa fa-cubes text-4xl text-blue-400/50 mb-4 mt-4"></i>
                  
                  <!-- 垂直排列的架构层 -->
                  <div class="flex flex-col items-center space-y-4 w-full flex-grow">
                    <!-- 应用层 -->
                    <div class="w-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/30">
                      <div class="text-center text-white font-medium">应用层</div>
                      <div class="text-center text-xs text-gray-400 mt-1">DApp、钱包、浏览器</div>
                    </div>
                    
                    <!-- 连接线1 -->
                    <div class="w-0.5 h-4 bg-gradient-to-b from-blue-500/50 to-teal-500/50"></div>
                    
                    <!-- 智能合约层 -->
                    <div class="w-full bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/30">
                      <div class="text-center text-white font-medium">智能合约层</div>
                      <div class="text-center text-xs text-gray-400 mt-1">Solidity、Vyper、EVM</div>
                    </div>
                    
                    <!-- 连接线2 -->
                    <div class="w-0.5 h-4 bg-gradient-to-b from-teal-500/50 to-green-500/50"></div>
                    
                    <!-- 共识层 -->
                    <div class="w-full bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-500/30">
                      <div class="text-center text-white font-medium">共识层</div>
                      <div class="text-center text-xs text-gray-400 mt-1">PoW、PoS、DPoS、PBFT</div>
                    </div>
                    
                    <!-- 连接线3 -->
                    <div class="w-0.5 h-4 bg-gradient-to-b from-green-500/50 to-yellow-500/50"></div>
                    
                    <!-- 网络层 -->
                    <div class="w-full bg-gradient-to-r from-green-500/20 to-yellow-500/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/30">
                      <div class="text-center text-white font-medium">网络层</div>
                      <div class="text-center text-xs text-gray-400 mt-1">P2P网络、节点发现、消息传播</div>
                    </div>
                    
                    <!-- 连接线4 -->
                    <div class="w-0.5 h-4 bg-gradient-to-b from-yellow-500/50 to-orange-500/50"></div>
                    
                    <!-- 数据层 -->
                    <div class="w-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-500/30">
                      <div class="text-center text-white font-medium">数据层</div>
                      <div class="text-center text-xs text-gray-400 mt-1">区块、交易、哈希、Merkle树</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 共识机制对比 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">共识机制对比</h2>
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-gray-700/50">
                  <th class="border border-blue-500/20 px-6 py-3 text-left">共识机制</th>
                  <th class="border border-blue-500/20 px-6 py-3 text-left">优势</th>
                  <th class="border border-blue-500/20 px-6 py-3 text-left">劣势</th>
                  <th class="border border-blue-500/20 px-6 py-3 text-left">典型应用</th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-300">
                  <td class="border border-blue-500/20 px-6 py-4 font-medium">工作量证明(PoW)</td>
                  <td class="border border-blue-500/20 px-6 py-4">安全性高、去中心化程度强</td>
                  <td class="border border-blue-500/20 px-6 py-4">能源消耗大、交易速度慢</td>
                  <td class="border border-blue-500/20 px-6 py-4">比特币、以太坊1.0</td>
                </tr>
                <tr class="hover:bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-300">
                  <td class="border border-blue-500/20 px-6 py-4 font-medium">权益证明(PoS)</td>
                  <td class="border border-blue-500/20 px-6 py-4">能耗低、交易速度快</td>
                  <td class="border border-blue-500/20 px-6 py-4">易形成富人俱乐部</td>
                  <td class="border border-blue-500/20 px-6 py-4">以太坊2.0、Cardano</td>
                </tr>
                <tr class="hover:bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-300">
                  <td class="border border-blue-500/20 px-6 py-4 font-medium">委托权益证明(DPoS)</td>
                  <td class="border border-blue-500/20 px-6 py-4">高性能、低延迟</td>
                  <td class="border border-blue-500/20 px-6 py-4">中心化程度较高</td>
                  <td class="border border-blue-500/20 px-6 py-4">EOS、Tron</td>
                </tr>
                <tr class="hover:bg-gradient-to-r from-blue-900/30 to-purple-900/30 transition-all duration-300">
                  <td class="border border-blue-500/20 px-6 py-4 font-medium">实用拜占庭容错(PBFT)</td>
                  <td class="border border-blue-500/20 px-6 py-4">终局性好、交易速度快</td>
                  <td class="border border-blue-500/20 px-6 py-4">节点数量受限</td>
                  <td class="border border-blue-500/20 px-6 py-4">Hyperledger Fabric</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 密码学基础 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">区块链密码学基础</h2>
          <p class="text-text-medium mb-6">区块链密码学是理解区块链技术核心安全机制的基础，以下为您整理了四种最重要的区块链密码学算法的权威学习资源。</p>
          
          <!-- SHA-256哈希函数 -->
          <div class="mb-10 bg-gray-700/50 border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa fa-lock text-xl text-primary"></i>
              </div>
              <h3 class="text-xl font-semibold">SHA-256哈希函数</h3>
            </div>
            <p class="text-text-medium text-sm mb-4">
              单向加密函数，将任意长度数据转换为固定长度哈希值，用于区块链接、交易验证和Merkle树构建。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-blue-400 mb-3">学习资源</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <i class="fa fa-book text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">优质教程：</span>
                      <a href="https://liaoxuefeng.com/books/blockchain/bitcoin/basic/index.html" target="_blank" class="text-blue-400 hover:underline">区块链教程 - SHA-256应用</a>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fa fa-cubes text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">区块链应用：</span>
                      <span class="text-text-medium">比特币区块哈希计算、数据完整性验证、地址生成</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-400 mb-3">代码示例</h4>
                <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner">
                  <pre><code class="language-python">import hashlib

def sha256_hash(data):
    return hashlib.sha256(data.encode()).hexdigest()

# 示例：区块哈希计算
block_data = "Genesis Block"
hash_result = sha256_hash(block_data)
print(f"SHA-256哈希值: {hash_result}")</code></pre>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Keccak-256哈希函数 -->
          <div class="mb-10 bg-gray-700/50 border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa fa-lock text-xl text-primary"></i>
              </div>
              <h3 class="text-xl font-semibold">Keccak-256哈希函数</h3>
            </div>
            <p class="text-text-medium text-sm mb-4">
              新一代哈希函数，以太坊采用的核心哈希算法，具有更高的安全性和性能。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-blue-400 mb-3">学习资源</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <i class="fa fa-book text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">优质教程：</span>
                      <a href="https://learnblockchain.cn/article/11570" target="_blank" class="text-blue-400 hover:underline">Keccak256在Solidity中的应用</a>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fa fa-cubes text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">区块链应用：</span>
                      <span class="text-text-medium">以太坊地址生成、智能合约函数选择器</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-400 mb-3">代码示例</h4>
                <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner">
                  <pre><code class="language-python">import sha3

def keccak256_hash(data):
    return sha3.keccak_256(data.encode()).hexdigest()

# 示例：以太坊地址生成
private_key = "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef"
public_key = private_key[2:]  # 简化示例
address = keccak256_hash(public_key)[-40:]  # 取后20个字节
print(f"以太坊地址: 0x{address}")</code></pre>
                </div>
              </div>
            </div>
          </div>
          
          <!-- ECDSA算法 -->
          <div class="mb-10 bg-gray-700/50 border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa fa-key text-xl text-primary"></i>
              </div>
              <h3 class="text-xl font-semibold">ECDSA（椭圆曲线数字签名算法）</h3>
            </div>
            <p class="text-text-medium text-sm mb-4">
              由公钥和私钥组成，公钥用于加密和验证签名，私钥用于解密和生成签名，确保交易安全。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-blue-400 mb-3">学习资源</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <i class="fa fa-book text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">优质教程：</span>
                      <a href="https://learnblockchain.cn/article/13739" target="_blank" class="text-blue-400 hover:underline">椭圆曲线数字签名算法详解</a>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fa fa-cubes text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">区块链应用：</span>
                      <span class="text-text-medium">比特币交易签名、以太坊交易验证</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-400 mb-3">代码示例</h4>
                <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner">
                  <pre><code class="language-python">from ecdsa import SigningKey, VerifyingKey

def ecdsa_sign(message, private_key):
    signature = private_key.sign(message.encode())
    return signature.hex()

def ecdsa_verify(message, signature, public_key):
    try:
        public_key.verify(bytes.fromhex(signature), message.encode())
        return True
    except:
        return False

# 示例使用
sk = SigningKey.generate()  # 生成私钥
vk = sk.get_verifying_key()  # 获取公钥
message = "Hello, Blockchain!"
signature = ecdsa_sign(message, sk)
is_valid = ecdsa_verify(message, signature, vk)
print(f"签名: {signature}")
print(f"签名验证: {is_valid}")</code></pre>
                </div>
              </div>
            </div>
          </div>
          
          <!-- EdDSA算法 -->
          <div class="bg-gray-700/50 border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <i class="fa fa-shield text-xl text-primary"></i>
              </div>
              <h3 class="text-xl font-semibold">EdDSA（Edwards曲线数字签名算法）</h3>
            </div>
            <p class="text-text-medium text-sm mb-4">
              证明交易真实性和完整性的密码学机制，确保交易不可否认且未被篡改。
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 class="font-medium text-blue-400 mb-3">学习资源</h4>
                <ul class="space-y-2 text-sm">
                  <li class="flex items-start">
                    <i class="fa fa-book text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">优质教程：</span>
                      <a href="https://blog.csdn.net/qq_42568323/article/details/144120461" target="_blank" class="text-blue-400 hover:underline">EdDSA算法详解</a>
                    </div>
                  </li>
                  <li class="flex items-start">
                    <i class="fa fa-cubes text-blue-500 mr-2 mt-1"></i>
                    <div>
                      <span class="font-medium">区块链应用：</span>
                      <span class="text-text-medium">Solana区块链签名、Cardano交易验证</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-400 mb-3">代码示例</h4>
                <div class="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm shadow-inner">
                  <pre><code class="language-python">from nacl.signing import SigningKey, VerifyKey

def eddsa_sign(message, private_key):
    signature = private_key.sign(message.encode())
    return signature.signature.hex()

def eddsa_verify(message, signature, public_key):
    try:
        public_key.verify(message.encode(), bytes.fromhex(signature))
        return True
    except:
        return False

# 示例使用
sk = SigningKey.generate()  # 生成私钥
vk = sk.verify_key  # 获取公钥
message = "Hello, EdDSA!"
signature = eddsa_sign(message, sk)
is_valid = eddsa_verify(message, signature, vk)
print(f"签名: {signature}")
print(f"签名验证: {is_valid}")</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 智能合约内容 -->
      <div v-show="activeTab === 'smartcontract'" class="space-y-10">
        <!-- 智能合约基础 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">智能合约基础</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">智能合约特点</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <i class="fa fa-check-circle text-green-500 mr-3"></i>
                  <span>自动执行：满足条件自动触发执行</span>
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check-circle text-green-500 mr-3"></i>
                  <span>不可篡改：一旦部署无法修改</span>
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check-circle text-green-500 mr-3"></i>
                  <span>透明公开：代码和执行过程可追溯</span>
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check-circle text-green-500 mr-3"></i>
                  <span>去中心化：不依赖中心化服务器</span>
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check-circle text-green-500 mr-3"></i>
                  <span>信任最小化：减少对第三方信任依赖</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">智能合约工作流程</h3>
              <div class="relative pl-8 space-y-6">
                <div class="relative">
                  <div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">1</div>
                  <h4 class="font-medium">代码编写</h4>
                  <p class="text-text-medium text-sm mt-1">使用Solidity等语言编写智能合约代码</p>
                </div>
                <div class="absolute left-[-30px] top-[24px] w-0.5 h-[64px] bg-blue-500/30"></div>
                <div class="relative">
                  <div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">2</div>
                  <h4 class="font-medium">编译部署</h4>
                  <p class="text-text-medium text-sm mt-1">编译为字节码并部署到区块链网络</p>
                </div>
                <div class="absolute left-[-30px] top-[88px] w-0.5 h-[64px] bg-blue-500/30"></div>
                <div class="relative">
                  <div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">3</div>
                  <h4 class="font-medium">交互调用</h4>
                  <p class="text-text-medium text-sm mt-1">用户通过交易调用合约函数</p>
                </div>
                <div class="absolute left-[-30px] top-[152px] w-0.5 h-[64px] bg-blue-500/30"></div>
                <div class="relative">
                  <div class="absolute -left-8 top-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">4</div>
                  <h4 class="font-medium">自动执行</h4>
                  <p class="text-text-medium text-sm mt-1">节点验证并执行合约代码</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- EVM核心功能 -->
        <div id="evm-core" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">以太坊虚拟机(EVM)核心功能</h2>
          
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">EVM数据存储结构</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-gray-700/50 rounded-lg p-5 border border-blue-500/20">
                <h4 class="font-medium mb-3">存储(Storage)</h4>
                <ul class="text-sm space-y-2 text-text-medium">
                  <li>• 永久存储状态数据</li>
                  <li>• 键值对映射</li>
                  <li>• Gas消耗最高</li>
                  <li>• 256位哈希寻址</li>
                </ul>
              </div>
              <div class="bg-gray-700/50 rounded-lg p-5 border border-blue-500/20">
                <h4 class="font-medium mb-3">内存(Memory)</h4>
                <ul class="text-sm space-y-2 text-text-medium">
                  <li>• 临时存储计算数据</li>
                  <li>• 线性扩展的字节数组</li>
                  <li>• 函数执行结束释放</li>
                  <li>• Gas消耗适中</li>
                </ul>
              </div>
              <div class="bg-gray-700/50 rounded-lg p-5 border border-blue-500/20">
                <h4 class="font-medium mb-3">栈(Stack)</h4>
                <ul class="text-sm space-y-2 text-text-medium">
                  <li>• 执行操作的工作区</li>
                  <li>• 最大深度1024</li>
                  <li>• 元素大小256位</li>
                  <li>• Gas消耗最低</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 指令集示例 -->
          <div>
            <h3 class="text-xl font-semibold mb-4">EVM指令集示例</h3>
            <div class="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto">
              <pre><code class="language-assembly">// 简单的加法操作示例
PUSH1 0x05      // 将0x05推入栈顶
PUSH1 0x0A      // 将0x0A推入栈顶
ADD             // 弹出两个元素相加，将结果(0x0F)推入栈顶
SSTORE 0x00     // 将结果存储到存储位置0x00</code></pre>
              <div class="mt-4 text-gray-400 text-sm">
                <p><span class="text-yellow-400">PUSH1</span>: 将1字节数据推入栈顶</p>
                <p><span class="text-yellow-400">ADD</span>: 加法操作</p>
                <p><span class="text-yellow-400">SSTORE</span>: 将数据存储到永久存储</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 智能合约安全 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">智能合约安全漏洞</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">常见安全漏洞</h3>
              <div class="space-y-4">
                <div class="border border-blue-500/20 rounded-lg p-4 hover:border-red-300 transition-colors bg-gray-700/50">
                  <h4 class="font-medium text-red-500">重入攻击(Reentrancy)</h4>
                  <p class="text-text-medium text-sm mt-1">
                    攻击者在合约执行过程中重复调用同一函数，导致资金被多次提取
                  </p>
                </div>
                <div class="border border-blue-500/20 rounded-lg p-4 hover:border-red-300 transition-colors bg-gray-700/50">
                  <h4 class="font-medium text-red-500">整数溢出/下溢</h4>
                  <p class="text-text-medium text-sm mt-1">
                    算术运算结果超出数据类型范围，导致意外行为
                  </p>
                </div>
                <div class="border border-blue-500/20 rounded-lg p-4 hover:border-red-300 transition-colors bg-gray-700/50">
                  <h4 class="font-medium text-red-500">访问控制缺失</h4>
                  <p class="text-text-medium text-sm mt-1">
                    关键函数缺少权限验证，允许未授权访问
                  </p>
                </div>
                <div class="border border-blue-500/20 rounded-lg p-4 hover:border-red-300 transition-colors bg-gray-700/50">
                  <h4 class="font-medium text-red-500">前置交易(Front-running)</h4>
                  <p class="text-text-medium text-sm mt-1">
                    矿工或观察者利用交易池中的信息提前执行有利交易
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">安全漏洞示例</h3>
              <div class="bg-gray-900 text-white p-5 rounded-lg overflow-x-auto text-sm">
                <pre><code class="language-solidity">// 存在重入漏洞的提款函数示例
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    
    // 漏洞：在更新状态前发送以太币
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    
    // 应该先更新状态再发送以太币
    balances[msg.sender] -= amount;
}

// 安全的提款函数示例
function safeWithdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    
    // 安全：先更新状态再发送以太币
    balances[msg.sender] -= amount;
    
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Layer2内容 -->
      <div v-show="activeTab === 'layer2'" class="space-y-10">
        <!-- Layer2扩展技术概述 -->
        <div id="layer2-scaling" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">Layer2扩展技术概述</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-4">Layer2技术定义</h3>
              <p class="text-text-medium mb-4">
                Layer2是构建在区块链主网(Layer1)之上的扩展解决方案，通过将部分交易处理从主网转移到第二层网络，
                显著提高交易吞吐量并降低交易费用，同时保持主网的安全性。
              </p>
              <h4 class="font-semibold mb-2">主要优势：</h4>
              <ul class="space-y-2 text-text-medium">
                <li class="flex items-center">
                  <i class="fa fa-check text-green-500 mr-2"></i>
                  高吞吐量：每秒可处理数千至上万笔交易
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check text-green-500 mr-2"></i>
                  低交易费用：显著低于主网交易成本
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check text-green-500 mr-2"></i>
                  安全性继承：继承主网的安全保障
                </li>
                <li class="flex items-center">
                  <i class="fa fa-check text-green-500 mr-2"></i>
                  兼容性：与现有智能合约生态兼容
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-4">Layer2技术分类</h3>
              <div class="space-y-4">
                <div class="border border-blue-500/20 rounded-lg p-4 hover:bg-gray-600 transition-colors bg-gray-700/50">
                  <h4 class="font-medium">状态通道(State Channels)</h4>
                  <p class="text-text-medium text-sm mt-1">
                    在链下建立双向通道进行多次交易，只将最终状态提交到主网
                  </p>
                  <p class="text-sm mt-2">
                    <span class="text-gray-600">代表项目：</span>
                    <a href="https://lightning.network/" target="_blank" class="text-primary hover:underline">Lightning Network</a>
                  </p>
                </div>
                <div class="border border-blue-500/20 rounded-lg p-4 hover:bg-gray-600 transition-colors bg-gray-700/50">
                  <h4 class="font-medium">侧链(Sidechains)</h4>
                  <p class="text-text-medium text-sm mt-1">
                    独立运行的区块链，通过双向锚定与主网交互
                  </p>
                  <p class="text-sm mt-2">
                    <span class="text-gray-600">代表项目：</span>
                    <a href="https://github.com/0xPolygon" target="_blank" class="text-primary hover:underline">Polygon PoS</a>
                  </p>
                </div>
                <div class="border border-blue-500/20 rounded-lg p-4 hover:bg-gray-600 transition-colors bg-gray-700/50">
                  <h4 class="font-medium">Rollups</h4>
                  <p class="text-text-medium text-sm mt-1">
                    将多笔交易打包并批量提交到主网，包括Optimistic和ZK两种类型
                  </p>
                  <p class="text-sm mt-2">
                    <span class="text-gray-600">代表项目：</span>
                    <a href="https://github.com/ethereum-optimism/optimism" target="_blank" class="text-primary hover:underline mr-2">Optimism</a>,
                    <a href="https://github.com/OffchainLabs/arbitrum" target="_blank" class="text-primary hover:underline mr-2">Arbitrum</a>,
                    <a href="https://github.com/matter-labs/zksync-era" target="_blank" class="text-primary hover:underline">zkSync</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Optimism vs Arbitrum对比 -->
        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">Optimistic Rollups方案对比</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-700/50">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <i class="fa fa-rocket text-xl text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold">Optimism</h3>
              </div>
              <ul class="space-y-3 text-text-medium">
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                  <span>采用单轮欺诈证明机制</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                  <span>状态更新延迟约7天</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                  <span>OP Stack模块化架构</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                  <span>与以太坊EVM完全等效</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-primary mt-1 mr-2"></i>
                  <span>使用OVM (Optimistic Virtual Machine)</span>
                </li>
              </ul>
            </div>
            <div class="border border-blue-500/20 rounded-lg p-6 hover:shadow-lg transition-shadow bg-gray-700/50">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-3">
                  <i class="fa fa-cubes text-xl text-secondary"></i>
                </div>
                <h3 class="text-xl font-semibold">Arbitrum</h3>
              </div>
              <ul class="space-y-3 text-text-medium">
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-secondary mt-1 mr-2"></i>
                  <span>采用多轮交互式欺诈证明</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-secondary mt-1 mr-2"></i>
                  <span>状态更新延迟约7天</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-secondary mt-1 mr-2"></i>
                  <span>Nitro引擎优化</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-secondary mt-1 mr-2"></i>
                  <span>使用WASM执行环境</span>
                </li>
                <li class="flex items-start">
                  <i class="fa fa-angle-right text-secondary mt-1 mr-2"></i>
                  <span>支持更灵活的费用模型</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- 跨链技术 -->
        <div id="cross-chain" class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 border border-blue-500/30">
          <h2 class="text-2xl font-bold mb-6">跨链技术方案</h2>
          <div class="mb-8">
            <h3 class="text-xl font-semibold mb-4">区块链孤岛问题</h3>
            <div class="bg-gray-700/50 rounded-lg p-6 border border-blue-500/20">
              <p class="text-text-medium mb-4">
                随着区块链生态的发展，不同区块链网络之间的互操作性成为重要挑战。
                各个区块链独立运行，数据和资产难以在不同链之间自由流动，形成了"区块链孤岛"现象。
              </p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div class="bg-gray-700/50 rounded p-4 text-center border border-blue-500/20">
                  <i class="fa fa-chain-broken text-2xl text-red-500 mb-2"></i>
                  <p class="text-sm">资产无法跨链转移</p>
                </div>
                <div class="bg-gray-700/50 rounded p-4 text-center border border-blue-500/20">
                  <i class="fa fa-database text-2xl text-red-500 mb-2"></i>
                  <p class="text-sm">数据孤岛互不连通</p>
                </div>
                <div class="bg-gray-700/50 rounded p-4 text-center border border-blue-500/20">
                  <i class="fa fa-users text-2xl text-red-500 mb-2"></i>
                  <p class="text-sm">用户群体分割</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 主流跨链方案对比 -->
          <div>
            <h3 class="text-xl font-semibold mb-4">主流跨链方案对比</h3>
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="bg-gray-700/50">
                    <th class="border border-gray-200 px-6 py-3 text-left">跨链方案</th>
                    <th class="border border-gray-200 px-6 py-3 text-left">技术原理</th>
                    <th class="border border-gray-200 px-6 py-3 text-left">优势</th>
                    <th class="border border-gray-200 px-6 py-3 text-left">劣势</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="hover:bg-gray-700/70">
                    <td class="border border-blue-500/20 px-6 py-4 font-medium">哈希锁定</td>
                    <td class="border border-blue-500/20 px-6 py-4">利用哈希时间锁合约(HTLC)实现原子交换</td>
                    <td class="border border-blue-500/20 px-6 py-4">无需可信第三方，实现简单</td>
                    <td class="border border-blue-500/20 px-6 py-4">仅支持资产交换，不支持复杂操作</td>
                  </tr>
                  <tr class="hover:bg-gray-700/70">
                    <td class="border border-blue-500/20 px-6 py-4 font-medium">侧链/中继链</td>
                    <td class="border border-blue-500/20 px-6 py-4">通过验证节点组中继跨链消息</td>
                    <td class="border border-blue-500/20 px-6 py-4">支持复杂操作，扩展性好</td>
                    <td class="border border-blue-500/20 px-6 py-4">安全性依赖于验证节点</td>
                  </tr>
                  <tr class="hover:bg-gray-700/70">
                    <td class="border border-blue-500/20 px-6 py-4 font-medium">公证人机制</td>
                    <td class="border border-blue-500/20 px-6 py-4">可信第三方验证跨链交易</td>
                    <td class="border border-blue-500/20 px-6 py-4">实现简单，交易速度快</td>
                    <td class="border border-blue-500/20 px-6 py-4">中心化程度高</td>
                  </tr>
                  <tr class="hover:bg-gray-700/70">
                    <td class="border border-blue-500/20 px-6 py-4 font-medium">Polkadot</td>
                    <td class="border border-blue-500/20 px-6 py-4">异构多链架构，共享安全</td>
                    <td class="border border-blue-500/20 px-6 py-4">高安全性，可定制化程度高</td>
                    <td class="border border-blue-500/20 px-6 py-4">技术复杂度高，开发难度大</td>
                  </tr>
                  <tr class="hover:bg-gray-700/70">
                    <td class="border border-blue-500/20 px-6 py-4 font-medium">Cosmos</td>
                    <td class="border border-blue-500/20 px-6 py-4">IBC协议，允许独立区块链互操作</td>
                    <td class="border border-blue-500/20 px-6 py-4">完全去中心化，高度灵活</td>
                    <td class="border border-blue-500/20 px-6 py-4">需要接入Hub才能实现全网络互操作</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 标签页配置
const tabs = ref([
  { id: 'blockchain', name: '公链技术' },
  { id: 'smartcontract', name: '智能合约' },
  { id: 'layer2', name: 'Layer2扩展' }
])

// 当前激活的标签
const activeTab = ref('blockchain')

// 切换标签页
const switchTab = (tabId) => {
  activeTab.value = tabId
}

// 页面加载时检查URL锚点
onMounted(() => {
  const hash = window.location.hash
  if (hash) {
    // 根据锚点激活对应的标签页
    if (hash === '#evm-core') {
      activeTab.value = 'smartcontract'
    } else if (hash === '#layer2-scaling' || hash === '#cross-chain') {
      activeTab.value = 'layer2'
    }
    
    // 平滑滚动到对应的锚点位置
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }
  
  // 初始化Prism.js代码高亮
  import('prismjs').then(Prism => {
    Prism.highlightAll()
  })
})
</script>

<style scoped>
/* 标签切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 表格样式优化 */
table {
  font-size: 0.95rem;
}

th {
  font-weight: 600;
}

/* 代码高亮容器样式 */
pre {
  margin: 0;
}

code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>