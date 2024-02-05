import React from "react";
import {DndContext} from "@dnd-kit/core";
import ProcessCard from "./components/ProcessCard";

const ProcessBoard: React.FC = () => {
  return (
    // <PageContainer>
      <DndContext>
        <ProcessCard id={'1'} title={'haha'} />
        {/*<Row>*/}
        {/*  <div>*/}
        {/*    <ProcessCard key={'123'} id='1.1' title='项目A' />*/}
        {/*    <ProcessCard key={'124'} id='1.2' title='项目B' />*/}
        {/*    <ProcessCard key={'125'} id='1.3' title='项目C' />*/}
        {/*    <ProcessCard key={'126'} id='1.4' title='项目D' />*/}
        {/*  </div>*/}
        {/*  <ProcessStatusColumn id='2' label='进行中' color='green'>*/}
        {/*    <ProcessCard key={'127'} id='2.1' title='项目A' />*/}
        {/*    <ProcessCard key={'128'} id='2.2' title='项目B' />*/}
        {/*    <ProcessCard key={'129'} id='2.3' title='项目C' />*/}
        {/*    <ProcessCard key={'130'} id='2.4' title='项目D' />*/}
        {/*  </ProcessStatusColumn>*/}
        {/*</Row>*/}
      </DndContext>
    // </PageContainer>
  )
}

export default ProcessBoard;
