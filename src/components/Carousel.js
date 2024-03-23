import React from "react";
import "../index.css";
import { CDNCAR_URL } from "../utils/constants";

const carouselitem = [
  {
    id: "762797",
    imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    action: {
      link: "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
      text: "Burgers",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for burger",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
    frequencyCapping: {},
  },
  {
    id: "750580",
    imageId: "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    action: {
      link: "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
      text: "pizzas",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for pizza",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
    frequencyCapping: {},
  },
  {
    id: "750230",
    imageId: "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
    action: {
      link: "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
      text: "Samosa",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for samosa",
      altTextCta: "open",
    },
    entityId: "80397",
    frequencyCapping: {},
  },
  {
    id: "750592",
    imageId: "v1675667625/PC_Creative%20refresh/Biryani_2.png",
    action: {
      link: "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
      text: "Biryani",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for biryani",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
    frequencyCapping: {},
  },
  {
    id: "750249",
    imageId:
      "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    action: {
      link: "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
      text: "Shawarma",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for shawarma",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
    frequencyCapping: {},
  },
  {
    id: "750223",
    imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    action: {
      link: "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
      text: "Rolls",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for roll",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
    frequencyCapping: {},
  },
  {
    id: "749774",
    imageId: "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    action: {
      link: "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
      text: "Noodles",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for noodles",
      altTextCta: "open",
    },
    entityId: "80464",
    frequencyCapping: {},
  },
  {
    id: "749791",
    imageId: "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Pakodas.png",
    action: {
      link: "https://www.swiggy.com/collections/80470?collection_id=80470&tags=layout_BAU_Contextual%2Cpakoda&type=rcv2",
      text: "Pakoda",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pakoda",
      altTextCta: "open",
    },
    entityId: "80470",
    frequencyCapping: {},
  },
  {
    id: "750588",
    imageId: "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    action: {
      link: "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
      text: "Chinese",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for chinese",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
    frequencyCapping: {},
  },
  {
    id: "750240",
    imageId:
      "v1674029857/PC_Creative%20refresh/3D_bau/banners_new/Punugulu.png",
    action: {
      link: "https://www.swiggy.com/collections/80380?collection_id=80380&tags=layout_BAU_Contextual%2Cpunugulu&type=rcv2",
      text: "Punugulu",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for punugulu",
      altTextCta: "open",
    },
    entityId: "80380",
    frequencyCapping: {},
  },
  {
    id: "750235",
    imageId:
      "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
    action: {
      link: "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
      text: "Sandwich",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for sandwich",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
    frequencyCapping: {},
  },
  {
    id: "749769",
    imageId: "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
    action: {
      link: "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
      text: "Momos",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for momos",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
    frequencyCapping: {},
  },
  {
    id: "749874",
    imageId: "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    action: {
      link: "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
      text: "Cakes",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for cakes",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
    frequencyCapping: {},
  },
  {
    id: "750217",
    imageId:
      "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    action: {
      link: "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
      text: "Pav Bhaji",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pav bhaji",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
    frequencyCapping: {},
  },
  {
    id: "750207",
    imageId: "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
    action: {
      link: "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
      text: "Pasta",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for pasta",
      altTextCta: "open",
    },
    entityId: "80480",
    frequencyCapping: {},
  },
  {
    id: "750239",
    imageId: "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    action: {
      link: "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
      text: "Shake",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurant curated for shakes",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
    frequencyCapping: {},
  },
  {
    id: "750132",
    imageId: "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    action: {
      link: "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
      text: "Dosa",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for dosa",
      altTextCta: "open",
    },
    entityId: "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
    frequencyCapping: {},
  },
  {
    id: "750572",
    imageId:
      "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
    action: {
      link: "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
      text: "Pure Veg",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for veg",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
    frequencyCapping: {},
  },
  {
    id: "750644",
    imageId: "v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png",
    action: {
      link: "https://www.swiggy.com/collections/80441?collection_id=80441&searchContext=idli&tags=layout_CCS_Idli&type=rcv2",
      text: "Idli",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for idly",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=80441&tags=layout_CCS_Idli&searchContext=idli",
    frequencyCapping: {},
  },
  {
    id: "750584",
    imageId: "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
    action: {
      link: "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=south_indian&tags=layout_CCS_SouthIndian&type=rcv2",
      text: "South Indian",
      type: "WEBLINK",
    },
    entityType: "BANNER",
    accessibility: {
      altText: "restaurants curated for south indian",
      altTextCta: "open",
    },
    entityId:
      "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=south_indian",
    frequencyCapping: {},
  },
];
const Carousel = () => {
  return (
    <div>
      <div className="flex justify-between my-2   items-center">
        <h1 className="font-semibold text-left pl-[0.9rem] pt-8 text-[1.75rem] text-white">
          What's On Your Mind?!
        </h1>
      </div>
      <div className="flex justify-between  overflow-scroll scroll-auto mt-4 mb-2   no-scrollbar">
        {carouselitem.map((item) => (
          <img
            src={CDNCAR_URL + item.imageId}
            alt="item1"
            key={item.id}
            className="border rounded-full mr-6  "
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
