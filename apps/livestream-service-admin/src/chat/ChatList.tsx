import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LIVESTREAM_TITLE_FIELD } from "../livestream/LivestreamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ChatList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Chats"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="livestream_"
          source="livestream.id"
          reference="Livestream"
        >
          <TextField source={LIVESTREAM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};
