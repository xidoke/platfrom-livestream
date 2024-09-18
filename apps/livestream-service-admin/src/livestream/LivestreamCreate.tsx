import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ChatTitle } from "../chat/ChatTitle";
import { DonationTitle } from "../donation/DonationTitle";
import { UserTitle } from "../user/UserTitle";

export const LivestreamCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <ReferenceArrayInput source="chats" reference="Chat">
          <SelectArrayInput
            optionText={ChatTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput source="donations" reference="Donation">
          <SelectArrayInput
            optionText={DonationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="end_time" source="endTime" />
        <TextInput label="recording_url" source="recordingUrl" />
        <DateTimeInput label="start_time" source="startTime" />
        <TextInput label="status" source="status" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="viewer_count" source="viewerCount" />
      </SimpleForm>
    </Create>
  );
};
