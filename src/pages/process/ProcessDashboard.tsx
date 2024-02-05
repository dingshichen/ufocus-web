import React, {useState} from "react";
import {PageContainer} from "@ant-design/pro-components";
import {Button, Card, Col, Row} from "antd";

type ProcessColumn = {
  title: string,
  color: string,
  cards?: ProcessCard[],
}

type ProcessCard = {
  title: string;
}

/**
 * Grid 栅格 https://ant-design.antgroup.com/components/grid-cn
 * Card 卡片 https://ant-design.antgroup.com/components/card-cn
 * 过程看板
 */
const ProcessDashboard: React.FC = () => {
  const [moveKey, setMoveKey] = useState<string>();
  const [onMoveKey, setOnMoveKey] = useState<string>();

  const columns: ProcessColumn[] = [
    {
      title: '未开始',
      color: 'gold',
      cards: [
        {
          title: '卡片1'
        },
        {
          title: '卡片2'
        },
        {
          title: '卡片3'
        },
        {
          title: '卡片4'
        },
        {
          title: '卡片5'
        },
        {
          title: '卡片6'
        },
      ]
    },
    {
      title: '进行中',
      color: 'green',
      cards: [
        {
          title: '卡片1'
        },
      ]
    },
    {
      title: '已完成',
      color: 'blue',
    },
    {
      title: '已取消',
      color: 'red',
      cards: [
        {
          title: '卡片1'
        },
      ]
    },
    {
      title: '已归档',
      color: 'purple',
      cards: [
        {
          title: '卡片1'
        },
      ]
    },
  ]

  const handleDragStart = (key: string, e: React.DragEvent<HTMLDivElement>) => {
    // setMoveKey(key);
    // console.log('开始', key);
  };
  const handleDragEnd = (key: string, e: React.DragEvent<HTMLDivElement>) => {
    // if (moveKey === key) {
    //   return
    // }
    // setMoveKey(undefined);
    // console.log('释放', key);
  };
  const handDragEnter = (key: string, e: React.DragEvent<HTMLDivElement>) => {
    // if (moveKey === key) {
    //   return
    // }
    // setOnMoveKey(key)
    console.log('进入', key);
  };
  const handDragLeave = (key: string, e: React.DragEvent<HTMLDivElement>) => {
    // if (moveKey === key) {
    //   return
    // }
    // setOnMoveKey(undefined)
    console.log('离开', key);
  };
  return (
    <PageContainer>
      <div style={{width: '100%', height: document.body.clientHeight - 300, overflow: 'auto'}}>
        <Row gutter={{sm: 24}} wrap={false}>
          {
            columns.map((column) => {
              return (
                <Col
                  span={6}
                  key={column.title}
                  style={{borderStyle: 'solid', borderWidth: '3px', borderColor: column.color}}
                  onDragEnter={(e) => {
                    handDragEnter(column.title, e);
                  }}
                  onDragLeave={(e) => {
                    handDragLeave(column.title, e);
                  }}
                >
                  <Button style={{
                    background: onMoveKey === column.title ? 'white' : column.color,
                    color: 'white',
                    fontWeight: 'bold',
                    position: "sticky",
                    top: 3,
                    zIndex: 10
                  }} block>{column.title}</Button>
                  {
                    column.cards?.map((card) => {
                      return (
                        <>
                          <br/>
                          <Card
                            title={column.title}
                            key={card.title}
                            hoverable={true}
                            draggable={true}
                            onDragStart={(e) => {
                              handleDragStart(column.title, e);
                            }}
                            onDragEnd={(e) => {
                              handleDragEnd(column.title, e);
                            }}
                          >
                            卡片内容
                          </Card>
                        </>
                      )
                    })
                  }
                </Col>
              )
            })
          }
        </Row>
      </div>
    </PageContainer>
  )
}

export default ProcessDashboard;
