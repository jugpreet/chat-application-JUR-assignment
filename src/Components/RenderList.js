import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './RenderList.css'
const RenderList = (props) => {
    const { dataArr, handleClick } = props
    return <div>
        {dataArr?.map((data) => {
            return <div key={data?.id} onClick={() => handleClick && handleClick(data)}  className="renderList">
                <Avatar size={64} icon={<UserOutlined />} />
                <p>{data?.name || data?.title || data?.content}</p>
            </div>
        })}
    </div>
}
export default RenderList