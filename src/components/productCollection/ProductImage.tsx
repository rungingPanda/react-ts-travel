import React from 'react';
import { Image, Typography } from 'antd'
import { useHistory } from 'react-router-dom'

interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}
export const ProductImage: React.FC<PropsType> = ({ id, size, imageSrc, price, title }) => {
  const history = useHistory();
  return <div onClick={() => { history.push(`/detail/${id}`) }}>
    {size === "large" ? <Image src={imageSrc} height={285} width={485}></Image> : <Image src={imageSrc} height={118} width={240}></Image>}
    <div>
      <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
      <Typography.Text type="danger">¥{price}</Typography.Text>
    </div>
  </div>
}