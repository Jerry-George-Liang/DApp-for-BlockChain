<template>
  <div class="py-12 bg-gray-900/0 text-gray-300">
    <div class="container mx-auto px-4">
      <!-- 页面标题 -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">区块链开发代码教程</h1>
        <p class="text-text-medium max-w-2xl mx-auto">
          从入门到精通的区块链开发实践指南，包含Solidity智能合约和API调用教程
        </p>
      </div>

      <!-- 3步极简操作教程 -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30">
        <h2 class="text-2xl font-bold mb-8 text-center">3步极简操作教程</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- 步骤1 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 class="text-xl font-semibold mb-3">环境准备</h3>
            <p class="text-text-medium">
              安装MetaMask浏览器插件，创建钱包并获取测试网络ETH，为开发和测试做准备
            </p>
            <div class="mt-4 bg-gray-700/50 rounded-lg p-4 border border-blue-500/20">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium">进度</span>
                <span class="text-sm text-primary">100%</span>
              </div>
              <div class="w-full bg-gray-600 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
          </div>
          
          <!-- 步骤2 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 class="text-xl font-semibold mb-3">合约开发</h3>
            <p class="text-text-medium">
              使用Remix IDE编写Solidity智能合约，编译并部署到测试网络，实现NFT铸造功能
            </p>
            <div class="mt-4 bg-gray-700/50 rounded-lg p-4 border border-blue-500/20">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium">进度</span>
                <span class="text-sm text-primary">100%</span>
              </div>
              <div class="w-full bg-gray-600 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
          </div>
          
          <!-- 步骤3 -->
          <div class="text-center">
            <div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 class="text-xl font-semibold mb-3">交互调用</h3>
            <p class="text-text-medium">
              通过JavaScript调用智能合约ABI，实现NFT铸造、查询和转移等交互操作
            </p>
            <div class="mt-4 bg-gray-50 rounded-lg p-4">
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium">进度</span>
                <span class="text-sm text-primary">100%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-primary h-2 rounded-full" style="width: 100%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Solidity NFT合约教程 -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30">
        <h2 class="text-2xl font-bold mb-6">Solidity NFT合约教程</h2>
        <p class="text-text-medium mb-6">
          以下是一个完整的ERC721 NFT智能合约示例，包含铸造、查询和转移等核心功能，
          每一行代码都有详细注释说明其功能和作用。
        </p>
        
        <!-- 代码块容器 -->
        <div class="relative">
          <button 
            class="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center"
            @click="copyCode(solidityCode)"
          >
            <i class="fa fa-copy mr-2"></i>
            {{ copyButtonText }}
          </button>
          <div class="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto max-h-[600px] overflow-y-auto">
            <pre><code class="language-solidity">{{ solidityCode }}</code></pre>
          </div>
        </div>

        <!-- 代码解释 -->
        <div class="mt-8">
          <h3 class="text-xl font-semibold mb-4">代码关键点解释</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-700/50 p-5 rounded-lg border border-blue-500/20">
              <h4 class="font-semibold mb-3">ERC721标准</h4>
              <p class="text-text-medium text-sm">
                ERC721是以太坊上的非同质化代币标准，每个代币都有唯一的标识，
                适用于数字艺术品、游戏道具等独特资产的表示和交易。
              </p>
            </div>
            <div class="bg-gray-50 p-5 rounded-lg">
              <h4 class="font-semibold mb-3">OpenZeppelin库</h4>
              <p class="text-text-medium text-sm">
                利用OpenZeppelin提供的安全合约库，避免重复造轮子并减少安全漏洞风险，
                这些经过审计的库是智能合约开发的行业标准工具。
              </p>
            </div>
            <div class="bg-gray-50 p-5 rounded-lg">
              <h4 class="font-semibold mb-3">元数据URI</h4>
              <p class="text-text-medium text-sm">
                每个NFT都关联一个元数据URI，指向包含名称、描述和图像等信息的JSON文件，
                这使得NFT能够展示丰富的多媒体内容。
              </p>
            </div>
            <div class="bg-gray-50 p-5 rounded-lg">
              <h4 class="font-semibold mb-3">访问控制</h4>
              <p class="text-text-medium text-sm">
                使用Ownable模式实现基本的访问控制，确保只有合约所有者才能铸造新的NFT，
                防止未授权的铸造操作。
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- API调用教程 -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30">
        <h2 class="text-2xl font-bold mb-6">Etherscan API调用教程</h2>
        <p class="text-text-medium mb-6">
          以下是使用JavaScript调用Etherscan API查询交易记录和合约ABI的示例代码，
          帮助开发者获取区块链数据并与智能合约交互。
        </p>

        <!-- 代码块容器 -->
        <div class="relative mb-8">
          <button 
            class="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center"
            @click="copyCode(apiCode)"
          >
            <i class="fa fa-copy mr-2"></i>
            {{ copyButtonText }}
          </button>
          <div class="bg-gray-900 text-white p-6 rounded-lg overflow-x-auto max-h-[400px] overflow-y-auto">
            <pre><code class="language-javascript">{{ apiCode }}</code></pre>
          </div>
        </div>

        <!-- API使用说明 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">获取API密钥</h3>
            <ul class="space-y-3 text-text-medium">
              <li class="flex items-start">
                <i class="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>访问Etherscan官网注册账号</span>
              </li>
              <li class="flex items-start">
                <i class="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>在API Keys页面创建新的API密钥</span>
              </li>
              <li class="flex items-start">
                <i class="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>每个免费账号有请求频率限制（5次/秒）</span>
              </li>
              <li class="flex items-start">
                <i class="fa fa-check-circle text-green-500 mt-1 mr-3"></i>
                <span>保存API密钥并在代码中安全使用</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">常见API端点</h3>
            <div class="space-y-4">
              <div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20">
                <p class="font-medium mb-1">账户交易查询</p>
                <p class="text-sm text-text-medium">api/account?module=account&action=txlist</p>
              </div>
              <div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20">
                <p class="font-medium mb-1">合约ABI获取</p>
                <p class="text-sm text-text-medium">api?module=contract&action=getabi</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-medium mb-1">代币余额查询</p>
                <p class="text-sm text-text-medium">api?module=account&action=tokenbalance</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <p class="font-medium mb-1">区块信息查询</p>
                <p class="text-sm text-text-medium">api?module=block&action=getblockreward</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 复制按钮状态
const copyButtonText = ref('复制代码')

// Solidity代码示例
const solidityCode = `// SPDX-License-Identifier: MIT
// 声明许可证类型，在以太坊上发布智能合约时必须指定

pragma solidity ^0.8.0;
// 指定Solidity编译器版本，^表示向上兼容

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
// 导入OpenZeppelin提供的安全合约库

contract MyNFT is ERC721URIStorage, Ownable {
    // 继承ERC721URIStorage和Ownable合约
    
    uint256 private _tokenIds;
    // 私有变量，用于跟踪已铸造的NFT数量
    
    // 事件，当新的NFT被铸造时触发
    event NFTMinted(address recipient, uint256 tokenId, string tokenURI);
    
    // 构造函数，初始化NFT名称和符号
    constructor() ERC721("MyNFT", "MNFT") {
        // ERC721构造函数需要传入两个参数：
        // 1. name: NFT的名称
        // 2. symbol: NFT的符号（通常是缩写）
    }
    
    // 铸造新NFT的函数，只有合约所有者可以调用
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256) {
        // 参数说明：
        // - recipient: 接收NFT的地址
        // - tokenURI: NFT元数据的URI，指向包含名称、描述和图像等信息的JSON文件
        
        // 增加tokenId计数
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        
        // 调用ERC721的_mint函数铸造新NFT
        _mint(recipient, newItemId);
        
        // 设置NFT的元数据URI
        _setTokenURI(newItemId, tokenURI);
        
        // 触发事件，记录铸造信息
        emit NFTMinted(recipient, newItemId, tokenURI);
        
        // 返回新铸造NFT的ID
        return newItemId;
    }
    
    // 获取已铸造NFT总数的函数
    function totalSupply() public view returns (uint256) {
        return _tokenIds;
    }
    
    // 批量铸造NFT的函数（可选扩展功能）
    function batchMint(address[] memory recipients, string[] memory tokenURIs) public onlyOwner {
        // 验证地址数组和URI数组长度是否匹配
        require(recipients.length == tokenURIs.length, "Arrays length mismatch");
        
        // 循环铸造多个NFT
        for (uint i = 0; i < recipients.length; i++) {
            mintNFT(recipients[i], tokenURIs[i]);
        }
    }
    
    // 检查地址是否拥有NFT（包装ERC721的balanceOf函数）
    function hasNFT(address owner) public view returns (bool) {
        return balanceOf(owner) > 0;
    }
    
    // 安全转账NFT的函数（包装ERC721的safeTransferFrom函数）
    function safeTransferNFT(address from, address to, uint256 tokenId) public {
        // 验证调用者是否有权限转移NFT（是所有者或被授权者）
        require(_isApprovedOrOwner(_msgSender(), tokenId), "Not authorized");
        
        // 安全转移NFT
        safeTransferFrom(from, to, tokenId);
    }
}
`

// API调用代码示例
const apiCode = `// Etherscan API调用示例代码

// API密钥（实际使用时应从环境变量或安全存储中获取）
const API_KEY = 'YOUR_ETHERSCAN_API_KEY';

// 基础API URL
const BASE_URL = 'https://api.etherscan.io/api';

// 1. 查询账户交易记录
async function getTransactions(address, startBlock = 0, endBlock = 99999999) {
  try {
    // 构建API请求URL
    const url = \`\${BASE_URL}?module=account&action=txlist&address=\${address}&startblock=\${startBlock}&endblock=\${endBlock}&sort=desc&apikey=\${API_KEY}\`;
    
    // 发送GET请求
    const response = await fetch(url);
    const data = await response.json();
    
    // 检查响应状态
    if (data.status === '1') {
      console.log('交易记录:', data.result);
      return data.result;
    } else {
      console.error('获取交易记录失败:', data.message);
      return [];
    }
  } catch (error) {
    console.error('请求错误:', error);
    return [];
  }
}

// 2. 获取智能合约ABI
async function getContractABI(contractAddress) {
  try {
    // 构建API请求URL
    const url = \`\${BASE_URL}?module=contract&action=getabi&address=\${contractAddress}&apikey=\${API_KEY}\`;
    
    // 发送GET请求
    const response = await fetch(url);
    const data = await response.json();
    
    // 检查响应状态
    if (data.status === '1') {
      // 解析ABI字符串为JavaScript对象
      const abi = JSON.parse(data.result);
      console.log('合约ABI:', abi);
      return abi;
    } else {
      console.error('获取ABI失败:', data.message);
      return null;
    }
  } catch (error) {
    console.error('请求错误:', error);
    return null;
  }
}

// 3. 使用web3.js与智能合约交互
async function interactWithContract(contractAddress, abi, functionName, params = []) {
  try {
    // 确保Web3实例已加载
    if (typeof window.ethereum !== 'undefined') {
      // 请求用户授权连接MetaMask
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      
      // 创建Web3实例
      const web3 = new Web3(window.ethereum);
      
      // 创建合约实例
      const contract = new web3.eth.Contract(abi, contractAddress);
      
      // 获取当前账户
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      
      // 调用合约函数
      if (functionName === 'mintNFT') {
        // 调用写操作函数（需要发送交易）
        const tx = await contract.methods.mintNFT(params[0], params[1]).send({
          from: account
        });
        console.log('交易哈希:', tx.transactionHash);
        return tx;
      } else if (functionName === 'totalSupply') {
        // 调用只读函数
        const result = await contract.methods.totalSupply().call();
        console.log('总供应量:', result);
        return result;
      } else if (functionName === 'ownerOf') {
        // 调用只读函数
        const result = await contract.methods.ownerOf(params[0]).call();
        console.log('NFT所有者:', result);
        return result;
      }
    } else {
      console.error('请安装MetaMask浏览器插件');
    }
  } catch (error) {
    console.error('交互失败:', error);
    throw error;
  }
}

// 4. 综合示例：查询NFT合约信息并调用
async function mainExample() {
  try {
    // 示例合约地址（替换为实际部署的合约地址）
    const contractAddress = '0x1234567890123456789012345678901234567890';
    
    // 步骤1: 获取合约ABI
    const abi = await getContractABI(contractAddress);
    if (!abi) return;
    
    // 步骤2: 查询合约总供应量
    const totalSupply = await interactWithContract(contractAddress, abi, 'totalSupply');
    console.log('NFT总供应量:', totalSupply);
    
    // 步骤3: 如果有NFT，查询第一个NFT的所有者
    if (parseInt(totalSupply) > 0) {
      const owner = await interactWithContract(contractAddress, abi, 'ownerOf', [1]);
      console.log('NFT #1 所有者:', owner);
    }
    
  } catch (error) {
    console.error('主函数执行失败:', error);
  }
}

// 使用示例
// 查询以太坊地址的交易记录
getTransactions('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');

// 调用主示例函数
// mainExample();
`

// 复制代码功能
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    copyButtonText.value = '复制成功!';
    setTimeout(() => {
      copyButtonText.value = '复制代码';
    }, 2000);
  }).catch(err => {
    console.error('复制失败:', err);
  });
}
</script>

<style scoped>
/* 代码块样式 */
pre {
  margin: 0;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

code {
  font-family: inherit;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #777;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
  
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }
}
</style>