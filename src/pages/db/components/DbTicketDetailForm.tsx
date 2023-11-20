export type DbTicketDetailProps = {
  currentRow?: API.DbTicketWithScriptDetail;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinish: (values: any) => void;
}

