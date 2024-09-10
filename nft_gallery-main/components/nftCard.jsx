export const NFTCard = ({ nft }) => {

    return (
        <div className="w-1/4 flex flex-col ">
        <div className="rounded-md">
            <img className="object-cover h-128 w-full rounded-t-md" src={nft.media[0].gateway} ></img>
        </div>
        <div className="flex flex-col y-gap-2 px-2 py-3 bg-white rounded-b-md h-110 ">
            <div className="" >
                <h2 className="text-xl text-gray-800">{nft.title}</h2>
                {/* <p className="text-gray-600">Id: {nft.id.tokenId}</p> */}
                <p className="text-gray-600">{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p className="text-gray-600">{`${nft.contract.address.substr(0,5)}...${nft.contract.address.substr(nft.contract.address.length-4)}`}</p>
            </div>

            <div className="flex-grow mt-2">
                <p className="text-gray-600">{nft.description?.substr(0,150)}</p>
            </div>
            <div className="flex justify-center mb-1">
                <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} className="py-2 bg-blue-500 w-1/2 text-center rounded-m text-white cursor-pointer" >View on Etherscan</a>
            </div>
        </div>
        
    </div>
    )
}

/**
 * <div>
                <img src={nft.media[0].gateway} alt="" />
            </div>
            <div>
                <h2>{nft.title}</h2>
                <p>{nft.id.tokenId.substr(nft.id.tokenId.length - 4)}</p>
                <p>{`${nft.contract.address.substr(0,5)}...${nft.contract.address.substr(nft.contract.address.length-4)}`}</p>
            </div>
            <div>
                <p>{nft.description?.substr(0,150)}</p>
            </div>
            <div>
                <a target={"_blank"} href={`https://etherscan.io/token/${nft.contract.address}`} >View on Etherscan</a>
            </div>
        </div>
 */