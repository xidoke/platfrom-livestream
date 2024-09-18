import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { LIVESTREAM_TITLE_FIELD } from "./LivestreamTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LivestreamShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="end_time" source="endTime" />
        <TextField label="ID" source="id" />
        <TextField label="recording_url" source="recordingUrl" />
        <TextField label="start_time" source="startTime" />
        <TextField label="status" source="status" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="viewer_count" source="viewerCount" />
        <ReferenceManyField
          reference="Chat"
          target="livestreamId"
          label="Chats"
        >
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Donation"
          target="livestreamId"
          label="Donations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="amount" source="amount" />
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
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
