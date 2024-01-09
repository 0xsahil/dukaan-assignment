import { ArrowDownUp, ChevronDown, ChevronLeft, ChevronRight, Download, HelpCircle, Search } from 'lucide-react'


// Fetched data will be stored here
const tableData = [
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  },
  {
    orderId: "#281209",
    orderDate: "7 July, 2023",
    orderAmount: "₹1,278.23",
    transactionFee: "₹22"
  }

]


const paginationButtonCount = [
  {
    id: 1,
    pageNo: 1,
  },
  {
    id: 2,
    pageNo: "...",
  },
  {
    id: 3,
    pageNo: 10,
  },
  {
    id: 4,
    pageNo: 11,
  },
  {
    id: 5,
    pageNo: 12,
  },
  {
    id: 6,
    pageNo: 13,
  },
  {
    id: 7,
    pageNo: 14,
  },
  {
    id: 8,
    pageNo: 15,
  },
  {
    id: 9,
    pageNo: 16,
  },
  {
    id: 10,
    pageNo: 17,
  },
  {
    id: 11,
    pageNo: 18,
  },
];



const Dashboard = () => {
  return (<div className='w-full'>
    {/* Dashboard Nav */}
    <div className="flex items-center justify-between py-4 px-8 border-b w-full">
      <div className="flex w-[30%] items-center justify-start">
        <p>Payments </p>
        <span className='ml-4 flex items-center text-gray-400 text-sm'> <HelpCircle className='w-[12px]' /> How it works</span>
      </div>
      <div className="text-base w-[30%] flex items-center justify-start bg-gray-300 bg-opacity-30 p-2 rounded-md text-gray-600">
        <Search className='w-[15px] mr-2' />
        Search features, tutorials, etc.
      </div>
      <div className="flex w-[30%] justify-end items-center">
        <p className='flex items-center justify-center p-2 w-[40px] h-[40px] bg-gray-400 bg-opacity-30 rounded-full'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D" />
          </svg>
        </p>
        <p className='ml-4 flex items-center justify-center p-2 w-[40px] h-[40px] bg-gray-400 bg-opacity-30 rounded-full'>
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.11092 8.50258C7.51563 9.15871 6.48437 9.15872 5.88908 8.50258L0.615075 2.6895C-0.259446 1.72559 0.424491 0.181595 1.72599 0.181595L12.274 0.181596C13.5755 0.181596 14.2594 1.72559 13.3849 2.68949L8.11092 8.50258Z" fill="#4D4D4D" />
          </svg>
        </p>
      </div>
    </div>
    <div className="px-8">
      {/* Overview and Last Month */}
      <div className="flex justify-between items-center w-full my-8">
        <p className='text-xl font-medium'>Overview</p>
        <button className='flex items-center justify-center p-2 bg-gray-300 rounded-md '>Last Month <ChevronDown /> </button>
      </div>
      {/* Count Board */}
      <div className="flex justify-between my-8">
        <div className="text-left w-[49%] px-8 py-6 bg-white rounded-lg ">
          <p className='text-black80'>Online orders</p>
          <p className='text-4xl mt-4'>231</p>
        </div>
        <div className="text-left w-[49%] px-8 py-6 bg-white rounded-lg ">
          <p className='text-black80'>Amount received</p>
          <p className='text-4xl mt-4'>₹23,92,312.19</p>
        </div>
      </div>
      {/* Heading */}
      <p className='text-xl font-medium'>Transactions | This Month</p>
      <div className="flex flex-col bg-white rounded-lg p-3 mt-5 mb-10 mx-auto">
        {/* Transaction Table buttons */}
        <div className="flex justify-between items-center">
          <div className="text-base w-[20%] flex items-center justify-start bg-transparent border bg-opacity-30 p-2 rounded-md text-gray-600">
            <Search className='w-[15px] mr-2' />
            Search by order ID...
          </div>
          <div className="flex items-center justify-center text-black80">
            <button className='flex border text-base items-center p-2 rounded-lg mr-2'>Sort <ArrowDownUp className='h-[14px]' /> </button>
            <button className='border items-center p-2 rounded-lg'><Download /></button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-hidden my-4 w-full">
          <table className="min-w-full overflow-hidden">
            <thead className=" bg-gray-300 rounded-lg bg-opacity-30">
              <tr className='font-medium text-black80 '>
                <td className="p-4 py-3 text-left rounded-l-lg">Order ID</td>
                <td className="p-4 py-3 text-left">Order date <svg className='inline-block' width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z" fill="#4D4D4D" />
                </svg>
                </td>
                <td className="p-4 py-3 text-right">Order amount</td>
                <td className="p-4 py-3 text-right rounded-r-lg">Transaction fees
                  <svg className='inline-block' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_0_5817)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.0002 1.63353C4.03627 1.63353 1.63353 4.03627 1.63353 7.0002C1.63353 9.96412 4.03627 12.3669 7.0002 12.3669C9.96412 12.3669 12.3669 9.96412 12.3669 7.0002C12.3669 4.03627 9.96412 1.63353 7.0002 1.63353ZM0.700195 7.0002C0.700195 3.5208 3.5208 0.700195 7.0002 0.700195C10.4796 0.700195 13.3002 3.5208 13.3002 7.0002C13.3002 10.4796 10.4796 13.3002 7.0002 13.3002C3.5208 13.3002 0.700195 10.4796 0.700195 7.0002Z" fill="#4D4D4D" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00019 6.62382C7.25793 6.62382 7.46686 6.83276 7.46686 7.09049L7.46687 9.44604C7.46687 9.70377 7.25794 9.9127 7.00021 9.9127C6.74247 9.9127 6.53354 9.70377 6.53354 9.44604L6.53353 7.09049C6.53353 6.83276 6.74246 6.62382 7.00019 6.62382Z" fill="#4D4D4D" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52801 4.75852C7.52801 5.05002 7.29171 5.28633 7.00021 5.28633C6.70871 5.28633 6.4724 5.05002 6.4724 4.75852C6.4724 4.46702 6.70871 4.23072 7.00021 4.23072C7.29171 4.23072 7.52801 4.46702 7.52801 4.75852Z" fill="#4D4D4D" />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_5817">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => {
                return (
                  <tr className="border-b border-gray-400">
                    <td className=" p-3 text-left">{data.orderId}</td>
                    <td className=" p-3 text-left">{data.orderDate}</td>
                    <td className=" p-3 text-right">{data.orderAmount}</td>
                    <td className=" p-3 text-right">{data.transactionFee}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-evenly max-w-2/3 mx-auto">
          <button className='flex items-center justify-between py-2 px-4 border font-medium rounded-lg'> <ChevronLeft /> Previous</button>
          {
            paginationButtonCount.map((count) => <button key={count.id} className='flex items-center justify-center py-2 px-3 hover:bg-[#146EB4] mx-1 font-medium rounded-lg'>{count.pageNo}</button>
            )
          }
          <button className='flex items-center justify-between py-2 px-4 border font-medium rounded-lg'> Next <ChevronRight /></button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashboard

