import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '~/contexts/app.context'

const dataMenu = [
  {
    id: 1,
    path: '/intro',
    title: 'Giới thiệu'
  },
  {
    id: 2,
    path: '',
    title: 'Dịch vụ thành lập',
    children: [
      {
        id: 6,
        path: '',
        title: 'Thành lập hộ kinh doanh cá thể'
      },
      {
        id: 7,
        path: '',
        title: 'Doanh nghiệp tư nhân'
      },
      {
        id: 8,
        path: '',
        title: 'Công ty cổ phần'
      },
      {
        id: 9,
        path: '',
        title: 'Công ty tnhh'
      },
      {
        id: 10,
        path: '',
        title: 'Công ty vốn nước ngoài'
      }
    ]
  },
  {
    id: 3,
    path: '',
    title: 'Dịch vụ kế toán',
    children: [
      {
        id: 11,
        path: '/bao-cao-tai-chinh',
        title: 'Báo cáo tài chính'
      },
      {
        id: 12,
        path: '',
        title: 'quyết toán thuế'
      },
      {
        id: 13,
        path: '',
        title: 'soát xét sổ sách'
      },
      {
        id: 14,
        path: '',
        title: 'Hoàn thuế gtgt'
      }
    ]
  },
  {
    id: 4,
    path: '',
    title: 'Thay đổi gpkd',
    children: [
      {
        id: 15,
        path: '/dich-vu-thay-doi-ten',
        title: 'Thay đổi tên'
      },
      {
        id: 16,
        path: '',
        title: 'Đổi địa chỉ'
      },
      {
        id: 17,
        path: '',
        title: 'Thêm ngành nghề'
      },
      {
        id: 18,
        path: '',
        title: 'Tăng vốn điều lệ'
      },
      {
        id: 20,
        path: '',
        title: 'thêm cổ đông'
      },
      {
        id: 19,
        path: '',
        title: 'Đổi đại diện pháp luật'
      }
    ]
  },
  {
    id: 5,
    path: '/contact',
    title: 'Liên hệ'
  }
]
const Menu = () => {
  React.useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 1024 && setMenu(false)
      window.innerWidth >= 1024 && setMenu(true)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const { menu, setMenu } = React.useContext(AppContext)
  return (
    <div className={`${!menu && 'h-0 overflow-hidden'} transition-all flex flex-col lg:flex-row px-3`}>
      {dataMenu.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          className=' text-[16px] group  flex flex-col lg:px-4 cursor-pointer relative uppercase font-medium'
        >
          <div className='py-2 flex items-center gap-x-1'>
            {item.title}
            {item?.children && (
              <div className='w-[8px] h-[6px]'>
                <img
                  src='https://img.icons8.com/external-those-icons-fill-those-icons/24/external-down-arrows-those-icons-fill-those-icons-6.png'
                  alt='external-down-arrows-those-icons-fill-those-icons-6'
                />
              </div>
            )}
          </div>

          {item?.children && (
            <div className=' group-hover:flex z-10 lg:absolute top-8 lg:border lg:w-max hidden flex-col bg-white mt-2'>
              {item.children.map((itemMenu) => (
                <Link
                  key={itemMenu.id}
                  to={itemMenu.path}
                  className='p-2 hover:bg-blue-300 hover:text-white transition-all lg:normal-case lg:font-normal'
                >
                  {itemMenu.title}
                </Link>
              ))}
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export default Menu
