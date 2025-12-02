import{_ as b,r as m,o as u,m as p,c as v,b as e,d as r,f as c,t as s,P as x,i as g}from"./index-ChO2LHul.js";const h={class:"py-12 bg-gray-900/0 text-gray-300"},I={class:"container mx-auto px-4"},y={class:"bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30"},w={class:"relative"},T={class:"bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30"},N={class:"relative mb-8"},o=`// SPDX-License-Identifier: MIT
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
`,d=`// Etherscan API调用示例代码

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
`,A={__name:"CodeTutorialsView",setup(k){const a=m("复制代码");function n(l){navigator.clipboard.writeText(l).then(()=>{a.value="复制成功!",setTimeout(()=>{a.value="复制代码"},2e3)}).catch(t=>{console.error("复制失败:",t)})}function i(){setTimeout(()=>{x.highlightAll()},0)}return u(()=>{i()}),p([o,d],()=>{i()}),(l,t)=>(g(),v("div",h,[e("div",I,[t[10]||(t[10]=r('<div class="text-center mb-12" data-v-3f7bf762><h1 class="text-4xl font-bold mb-4" data-v-3f7bf762>区块链开发代码教程</h1><p class="text-text-medium max-w-2xl mx-auto" data-v-3f7bf762> 从入门到精通的区块链开发实践指南，包含Solidity智能合约和API调用教程 </p></div><div class="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-8 mb-12 border border-blue-500/30" data-v-3f7bf762><h2 class="text-2xl font-bold mb-8 text-center" data-v-3f7bf762>3步极简操作教程</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-3f7bf762><div class="text-center" data-v-3f7bf762><div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-v-3f7bf762>1</div><h3 class="text-xl font-semibold mb-3" data-v-3f7bf762>环境准备</h3><p class="text-text-medium" data-v-3f7bf762> 安装MetaMask浏览器插件，创建钱包并获取测试网络ETH，为开发和测试做准备 </p></div><div class="text-center" data-v-3f7bf762><div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-v-3f7bf762>2</div><h3 class="text-xl font-semibold mb-3" data-v-3f7bf762>合约开发</h3><p class="text-text-medium" data-v-3f7bf762> 使用Remix IDE编写Solidity智能合约，编译并部署到测试网络，实现NFT铸造功能 </p></div><div class="text-center" data-v-3f7bf762><div class="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4" data-v-3f7bf762>3</div><h3 class="text-xl font-semibold mb-3" data-v-3f7bf762>交互调用</h3><p class="text-text-medium" data-v-3f7bf762> 通过JavaScript调用智能合约ABI，实现NFT铸造、查询和转移等交互操作 </p></div></div></div>',2)),e("div",y,[t[3]||(t[3]=e("h2",{class:"text-2xl font-bold mb-6"},"Solidity NFT合约教程",-1)),t[4]||(t[4]=e("p",{class:"text-text-medium mb-6"}," 以下是一个完整的ERC721 NFT智能合约示例，包含铸造、查询和转移等核心功能， 每一行代码都有详细注释说明其功能和作用。 ",-1)),e("div",w,[e("button",{class:"absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center",onClick:t[0]||(t[0]=f=>n(o))},[t[2]||(t[2]=e("i",{class:"fa fa-copy mr-2"},null,-1)),c(" "+s(a.value),1)]),e("div",{class:"bg-gray-900 text-white p-6 rounded-lg overflow-x-auto max-h-[600px] overflow-y-auto"},[e("pre",null,[e("code",{class:"language-solidity"},s(o))])])]),t[5]||(t[5]=r('<div class="mt-8" data-v-3f7bf762><h3 class="text-xl font-semibold mb-4" data-v-3f7bf762>代码关键点解释</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-v-3f7bf762><div class="bg-gray-700/50 p-5 rounded-lg border border-blue-500/20" data-v-3f7bf762><h4 class="font-semibold mb-3" data-v-3f7bf762>ERC721标准</h4><p class="text-text-medium text-sm" data-v-3f7bf762> ERC721是以太坊上的非同质化代币标准，每个代币都有唯一的标识， 适用于数字艺术品、游戏道具等独特资产的表示和交易。 </p></div><div class="bg-gray-700/50 p-5 rounded-lg border border-blue-500/20" data-v-3f7bf762><h4 class="font-semibold mb-3" data-v-3f7bf762>OpenZeppelin库</h4><p class="text-text-medium text-sm" data-v-3f7bf762> 利用OpenZeppelin提供的安全合约库，避免重复造轮子并减少安全漏洞风险， 这些经过审计的库是智能合约开发的行业标准工具。 </p></div><div class="bg-gray-700/50 p-5 rounded-lg border border-blue-500/20" data-v-3f7bf762><h4 class="font-semibold mb-3" data-v-3f7bf762>元数据URI</h4><p class="text-text-medium text-sm" data-v-3f7bf762> 每个NFT都关联一个元数据URI，指向包含名称、描述和图像等信息的JSON文件， 这使得NFT能够展示丰富的多媒体内容。 </p></div><div class="bg-gray-700/50 p-5 rounded-lg border border-blue-500/20" data-v-3f7bf762><h4 class="font-semibold mb-3" data-v-3f7bf762>访问控制</h4><p class="text-text-medium text-sm" data-v-3f7bf762> 使用Ownable模式实现基本的访问控制，确保只有合约所有者才能铸造新的NFT， 防止未授权的铸造操作。 </p></div></div></div>',1))]),e("div",T,[t[7]||(t[7]=e("h2",{class:"text-2xl font-bold mb-6"},"Etherscan API调用教程",-1)),t[8]||(t[8]=e("p",{class:"text-text-medium mb-6"}," 以下是使用JavaScript调用Etherscan API查询交易记录和合约ABI的示例代码， 帮助开发者获取区块链数据并与智能合约交互。 ",-1)),e("div",N,[e("button",{class:"absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-700 transition-colors flex items-center",onClick:t[1]||(t[1]=f=>n(d))},[t[6]||(t[6]=e("i",{class:"fa fa-copy mr-2"},null,-1)),c(" "+s(a.value),1)]),e("div",{class:"bg-gray-900 text-white p-6 rounded-lg overflow-x-auto max-h-[400px] overflow-y-auto"},[e("pre",null,[e("code",{class:"language-javascript"},s(d))])])]),t[9]||(t[9]=r('<div class="grid grid-cols-1 md:grid-cols-2 gap-8" data-v-3f7bf762><div data-v-3f7bf762><h3 class="text-xl font-semibold mb-4" data-v-3f7bf762>获取API密钥</h3><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20 mb-6" data-v-3f7bf762><p class="text-text-medium text-sm" data-v-3f7bf762> Etherscan API需要使用API密钥进行访问，免费账号可以获得基本的API访问权限， 适合开发和测试使用。以下是获取API密钥的详细步骤： </p></div><ul class="space-y-3 text-text-medium" data-v-3f7bf762><li class="flex items-start" data-v-3f7bf762><i class="fa fa-check-circle text-green-500 mt-1 mr-3" data-v-3f7bf762></i><span data-v-3f7bf762>访问Etherscan官网注册账号</span></li><li class="flex items-start" data-v-3f7bf762><i class="fa fa-check-circle text-green-500 mt-1 mr-3" data-v-3f7bf762></i><span data-v-3f7bf762>在API Keys页面创建新的API密钥</span></li><li class="flex items-start" data-v-3f7bf762><i class="fa fa-check-circle text-green-500 mt-1 mr-3" data-v-3f7bf762></i><span data-v-3f7bf762>每个免费账号有请求频率限制（5次/秒）</span></li><li class="flex items-start" data-v-3f7bf762><i class="fa fa-check-circle text-green-500 mt-1 mr-3" data-v-3f7bf762></i><span data-v-3f7bf762>保存API密钥并在代码中安全使用</span></li></ul></div><div data-v-3f7bf762><h3 class="text-xl font-semibold mb-4" data-v-3f7bf762>常见API端点</h3><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20 mb-6" data-v-3f7bf762><p class="text-text-medium text-sm" data-v-3f7bf762> Etherscan提供了丰富的API端点，用于查询区块链数据和与智能合约交互。 以下是几个常用的API端点示例： </p></div><div class="space-y-4" data-v-3f7bf762><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20" data-v-3f7bf762><p class="font-medium mb-1" data-v-3f7bf762>账户交易查询</p><p class="text-sm text-text-medium" data-v-3f7bf762>api/account?module=account&amp;action=txlist</p></div><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20" data-v-3f7bf762><p class="font-medium mb-1" data-v-3f7bf762>合约ABI获取</p><p class="text-sm text-text-medium" data-v-3f7bf762>api?module=contract&amp;action=getabi</p></div><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20" data-v-3f7bf762><p class="font-medium mb-1" data-v-3f7bf762>代币余额查询</p><p class="text-sm text-text-medium" data-v-3f7bf762>api?module=account&amp;action=tokenbalance</p></div><div class="bg-gray-700/50 p-4 rounded-lg border border-blue-500/20" data-v-3f7bf762><p class="font-medium mb-1" data-v-3f7bf762>区块信息查询</p><p class="text-sm text-text-medium" data-v-3f7bf762>api?module=block&amp;action=getblockreward</p></div></div></div></div>',1))])])]))}},R=b(A,[["__scopeId","data-v-3f7bf762"]]);export{R as default};
