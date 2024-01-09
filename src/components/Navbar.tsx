import { navImage } from '../assets/assets'
import { ChevronDown, ClipboardList, Truck, BadgePercent, Palette, Zap, MousePointer2, LayoutGrid, Users, Wallet } from 'lucide-react'


const Buttons = [
  {
    id: 1,
    content: <><svg className='mr-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M16.9398 18.75H13.0675C12.7165 18.75 12.3797 18.6111 12.1307 18.3636C11.8816 18.1162 11.7407 17.7802 11.7385 17.4292V12.1622H8.22722V17.4292C8.22505 17.7802 8.08407 18.1162 7.83507 18.3636C7.58606 18.6111 7.24925 18.75 6.89818 18.75H3.02593C2.62123 18.75 2.2331 18.5892 1.94693 18.3031C1.66077 18.0169 1.5 17.6288 1.5 17.2241V7.99465C1.50032 7.75707 1.55611 7.52284 1.66293 7.31062C1.76975 7.0984 1.92465 6.91405 2.11529 6.77227L9.15426 1.55457C9.41825 1.35686 9.73919 1.25 10.069 1.25C10.3988 1.25 10.7198 1.35686 10.9837 1.55457L17.8832 6.76406C18.0665 6.91176 18.2136 7.09945 18.3131 7.31275C18.4126 7.52605 18.462 7.75931 18.4575 7.99465V17.2241C18.4586 17.4241 18.4201 17.6223 18.3443 17.8074C18.2686 17.9925 18.1569 18.1608 18.0159 18.3026C17.8749 18.4444 17.7072 18.5569 17.5225 18.6337C17.3378 18.7105 17.1398 18.75 16.9398 18.75ZM13.1496 17.3553H16.9562C16.9896 17.3532 17.0209 17.3385 17.0438 17.3141C17.0666 17.2897 17.0793 17.2575 17.0793 17.2241V7.99465C17.08 7.97543 17.0758 7.95635 17.0672 7.93915C17.0586 7.92195 17.0458 7.90718 17.03 7.89621L10.1141 2.68671C10.0911 2.67119 10.064 2.6629 10.0362 2.6629C10.0084 2.6629 9.98128 2.67119 9.95825 2.68671L2.92748 7.90441C2.91051 7.91673 2.89653 7.93271 2.88659 7.95117C2.87664 7.96964 2.87099 7.99011 2.87006 8.01106V17.2241C2.87006 17.2589 2.88389 17.2923 2.9085 17.3169C2.93312 17.3415 2.96651 17.3553 3.00132 17.3553H6.80794V12.0228C6.81009 11.6905 6.94303 11.3725 7.17796 11.1376C7.41289 10.9027 7.73091 10.7697 8.06314 10.7676H11.878C12.0439 10.7665 12.2084 10.7981 12.3621 10.8606C12.5158 10.9231 12.6557 11.0153 12.7737 11.1318C12.8918 11.2484 12.9858 11.387 13.0503 11.5399C13.1148 11.6928 13.1485 11.8569 13.1496 12.0228V17.3553Z" fill="white" />
      </g>
    </svg>
      Home </>,
  },
  {
    id: 2,
    content: <><ClipboardList className='mr-4' />Orders </>,
  },
  {
    id: 3,
    content: <><LayoutGrid className='mr-4' />Products </>,
  },
  {
    id: 4,
    content: <><Truck className='mr-4' />Delivery </>,
  },
  {
    id: 5,
    content: <><svg className='mr-4' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.1074 2.29084C13.0654 1.76834 14.2333 2.46167 14.2333 3.55281V16.4471C14.2333 17.5383 13.0653 18.2316 12.1074 17.7091L4.04696 13.3125H2.375C1.23591 13.3125 0.3125 12.3891 0.3125 11.25V8.74999C0.3125 7.6109 1.23591 6.68749 2.375 6.68749H4.04692L12.1074 2.29084ZM12.6083 3.86866L5.06662 7.9823V12.0176L12.6083 16.1313V3.86866ZM1.9375 8.74999C1.9375 8.50836 2.13338 8.31249 2.375 8.31249H3.4375V11.6875H2.375C2.13338 11.6875 1.9375 11.4916 1.9375 11.25V8.74999Z" fill="white" />
        <path d="M18.6387 5.32573C18.919 5.67613 18.8622 6.18743 18.5118 6.46775L16.4284 8.13442C16.078 8.41474 15.5667 8.35793 15.2864 8.00753C15.0061 7.65713 15.0629 7.14583 15.4133 6.86551L17.4966 5.19884C17.847 4.91852 18.3583 4.97533 18.6387 5.32573Z" fill="white" />
        <path d="M15.5041 10.0208C15.5041 9.57208 15.8679 9.20831 16.3166 9.20831H18.8583C19.307 9.20831 19.6708 9.57208 19.6708 10.0208C19.6708 10.4695 19.307 10.8333 18.8583 10.8333H16.3166C15.8679 10.8333 15.5041 10.4695 15.5041 10.0208Z" fill="white" />
        <path d="M16.4284 12.2822C16.078 12.0019 15.5667 12.0587 15.2864 12.4091C15.0061 12.7595 15.0629 13.2708 15.4133 13.5511L17.4966 15.2178C17.847 15.4981 18.3583 15.4413 18.6387 15.0909C18.919 14.7405 18.8622 14.2292 18.5118 13.9489L16.4284 12.2822Z" fill="white" />
      </g>
    </svg>
      Marketing </>,
  },
  {
    id: 6,
    content: <><svg className='mr-4' width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.6626 8.9376C1.6626 8.50958 2.00958 8.1626 2.4376 8.1626H6.8126C7.24062 8.1626 7.5876 8.50958 7.5876 8.9376C7.5876 9.36562 7.24062 9.7126 6.8126 9.7126H3.2126V14.5626C3.2126 14.9906 2.86562 15.3376 2.4376 15.3376C2.00958 15.3376 1.6626 14.9906 1.6626 14.5626V8.9376Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0.412598 14.5626C0.412598 14.1346 0.759577 13.7876 1.1876 13.7876H16.8126C17.2406 13.7876 17.5876 14.1346 17.5876 14.5626C17.5876 14.9906 17.2406 15.3376 16.8126 15.3376H1.1876C0.759577 15.3376 0.412598 14.9906 0.412598 14.5626Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.0376 5.1876C6.0376 4.75958 6.38458 4.4126 6.8126 4.4126H11.1876C11.6156 4.4126 11.9626 4.75958 11.9626 5.1876C11.9626 5.61562 11.6156 5.9626 11.1876 5.9626H7.5876V14.5626C7.5876 14.9906 7.24062 15.3376 6.8126 15.3376C6.38458 15.3376 6.0376 14.9906 6.0376 14.5626V5.1876Z" fill="white" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.4126 1.4376C10.4126 1.00958 10.7596 0.662598 11.1876 0.662598H15.5626C15.9906 0.662598 16.3376 1.00958 16.3376 1.4376V14.5626C16.3376 14.9906 15.9906 15.3376 15.5626 15.3376H11.1876C10.7596 15.3376 10.4126 14.9906 10.4126 14.5626V1.4376ZM11.9626 2.2126V13.7876H14.7876V2.2126H11.9626Z" fill="white" />
    </svg>
      Analytics </>,
  },
  {
    id: 7,
    content: <><svg className='mr-4' width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.75 11.75H1.47727C0.661397 11.75 0 11.1904 0 10.5V1.75C0 1.05964 0.661397 0.5 1.47727 0.5H14.7727C15.5886 0.5 16.25 1.05964 16.25 1.75L16.25 4.25H18.5227C19.3386 4.25 20 4.8796 20 5.65625V14.0938C20 14.8704 19.3386 15.5 18.5227 15.5H5.22727C4.4114 15.5 3.75 14.8704 3.75 14.0938V11.75ZM5 4C4.17157 4 3.5 4.67157 3.5 5.5V10.25H1.5V2H14.75L14.75 4H5ZM11.875 12.375C13.2557 12.375 14.375 11.2557 14.375 9.875C14.375 8.49429 13.2557 7.375 11.875 7.375C10.4943 7.375 9.375 8.49429 9.375 9.875C9.375 11.2557 10.4943 12.375 11.875 12.375Z" fill="white" />
    </svg>
      Payments </>,
  },
  {
    id: 8,
    content: <><MousePointer2 className='mr-4' />Tools </>,
  },
  {
    id: 9,
    content: <><BadgePercent className='mr-4' />Discounts </>,
  },
  {
    id: 10,
    content: <><Users className='mr-4' />Audience </>,
  },
  {
    id: 11,
    content: <><Palette className='mr-4' />Appearance </>,
  },
  {
    id: 12,
    content: <><Zap className='mr-4' />Plugins </>,
  }
]

const Navbar = () => {
  return (
    <div className="flex flex-col relative min-h-full">
      {/* Heading with name ad logo */}
      <div className=" text-whiteBg flex justify-between w-full items-center px-2">
        <div className='rounded-lg overflow-hidden object-cover'>
          <img src={navImage} alt="Nav Logo" />
        </div>
        <p className='text-white text-base w-[60%]'>Nishyan <br /> <span className='text-sm opacity-80 underline'>Visit store</span></p>
        <button><ChevronDown /></button>
      </div>
      {/* Navigation Items */}
      <div className="flex flex-col items-start justify-center mt-5 opacity-80 text-whiteBg">
        {Buttons.map((btn,idx) => {
          return (
            <button key={idx} className='text-sm flex items-center leading-5 my-2 py-2 px-4 w-full hover:bg-gray-500 rounded-lg bg-opacity-50'>
              {btn.content}
            </button>
          )
        })}
      </div>

      {/* Wallet and Available credits */}
      <div className="flex items-center justify-start bg-gray-400 text-gray-400 bg-opacity-15 p-2 rounded-md absolute bottom-2 w-full">
        <p className='text-2xl text-whiteBg p-2 mr-4 bg-gray-300 bg-opacity-15 rounded-md'>
          <Wallet />
        </p>
        <p>Available credits <br /> <span className='text-whiteBg'>222.10</span></p>
      </div>
    </div>
  )
}

export default Navbar


