
import React, { useState, useEffect } from 'react';
import { Coins, TrendingUp, Eye, Heart } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  price: number;
  image: string;
  creator: string;
  likes: number;
  views: number;
}

const NFTMarketplace = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading NFT data
    const loadNFTs = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockNFTs: NFT[] = [
        {
          id: '1',
          name: 'Cyber Punk AI #001',
          price: 2.5,
          image: `https://picsum.photos/300/300?random=1`,
          creator: 'AI_Artist_2024',
          likes: 142,
          views: 1250
        },
        {
          id: '2',
          name: 'Digital Dreams #042',
          price: 1.8,
          image: `https://picsum.photos/300/300?random=2`,
          creator: 'VirtualCreator',
          likes: 89,
          views: 980
        },
        {
          id: '3',
          name: 'Neural Network Art',
          price: 3.2,
          image: `https://picsum.photos/300/300?random=3`,
          creator: 'DeepMind_Artist',
          likes: 203,
          views: 1890
        }
      ];
      
      setNfts(mockNFTs);
      setLoading(false);
    };

    loadNFTs();
  }, []);

  if (loading) {
    return (
      <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/30 backdrop-blur-md rounded-xl border border-slate-700/50 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Coins className="h-5 w-5 text-yellow-400" />
        <h3 className="text-lg font-semibold text-white">NFT Marketplace</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700/30 hover:border-purple-500/50 transition-all duration-300">
            <img
              src={nft.image}
              alt={nft.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 space-y-3">
              <h4 className="font-semibold text-white">{nft.name}</h4>
              <p className="text-sm text-gray-400">by {nft.creator}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  <Coins className="h-4 w-4 text-yellow-400" />
                  <span className="text-white font-semibold">{nft.price} ETH</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-3 w-3" />
                    <span>{nft.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{nft.views}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTMarketplace;
