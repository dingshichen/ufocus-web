import React from "react";
import {DndContext} from "@dnd-kit/core";
import ProcessCard from "./components/ProcessCard";
import {PageContainer} from "@ant-design/pro-components";
import ProcessColumn from "@/pages/process/components/ProcessColumn";
import {Row} from "antd";

const processColumns = [
  {
    id: 'vvvv111111',
    title: '未开始',
    color: '#BAE0FF',
    children: [
      {
        id: 'project1',
        title: '项目1',
        user: '大糊涂',
      },
    ]
  },
  {
    id: 'vvvv111112',
    title: '进行中',
    color: '#D9F7BE',
    children: [
      {
        id: 'project2',
        title: '项目2',
        user: '大糊涂',
      },
      {
        id: 'project3',
        title: '项目3',
        user: '大糊涂',
      },
      {
        id: 'project4',
        title: '项目4',
        user: '大糊涂',
      },
      {
        id: 'project5',
        title: '项目5',
        user: '大糊涂',
      },
      {
        id: 'xxx1',
        title: '项目2',
        user: '大糊涂',
      },
      {
        id: 'xxx2',
        title: '项目3',
        user: '大糊涂',
      },
      {
        id: 'xxx3',
        title: '项目4',
        user: '大糊涂',
      },
      {
        id: 'xxx4',
        title: '项目5',
        user: '大糊涂',
      },
      {
        id: 'xxx5',
        title: '项目5',
        user: '大糊涂',
      },
      {
        id: 'xxx6',
        title: '项目5',
        user: '大糊涂',
      },
    ]
  },
  {
    id: 'vvvv111113',
    title: '已结束',
    color: '#FFCCC7',
    children: [

    ]
  },
  {
    id: 'vvvv111114',
    title: '已挂起',
    color: '#F7ECBE',
    children: [
      {
        id: 'project6',
        title: '项目6',
        user: '大糊涂',
      },
    ]
  },
  {
    id: 'vvvv111115',
    title: '已挂起',
    color: '#F7ECBE',
    children: [
      {
        id: 'project7',
        title: '项目7',
        user: '大糊涂',
      },
    ]
  },
]

/**
 * 过程看板
 */
const ProcessBoard: React.FC = () => {
  return (
    <PageContainer>
      <DndContext>
        <Row
          gutter={{ sm: 24 }}
          wrap={false}  // 是否自动换行，设置 false 后使元素不论是否超过屏幕都不换行
          style={{
            width: '100%', height: document.body.clientHeight - 250, overflow: 'auto'
          }}
        >
          {
            processColumns.map((column) => {
              return (
                <ProcessColumn key={column.id} label={column.title} color={column.color}>
                  {
                    column.children.map((card) => {
                      return (
                        <ProcessCard key={card.id} id={card.id} title={card.title} user={card.user}/>
                      )
                    })
                  }
                </ProcessColumn>
              );
            })
          }
        </Row>
      </DndContext>
    </PageContainer>
  )
}

export default ProcessBoard;
