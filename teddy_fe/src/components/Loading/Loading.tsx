import React from 'react'
import { Flex, Spin } from 'antd'

interface loadingProps {
  title?: string
  tip: string
}

const Loading: React.FC<loadingProps> = ({ tip,title }) => (
  <Flex gap="small" vertical>
    <Flex gap="small">
    <Spin tip={`${title ? title : 'Đang tải'} ${tip} ...`} size="large">
        <div className="content" />
      </Spin>
    </Flex>
  </Flex>
)

export default Loading