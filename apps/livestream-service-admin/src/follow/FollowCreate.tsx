import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FollowCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="follower_id" source="followerId" />
        <TextInput label="following_id" source="followingId" />
      </SimpleForm>
    </Create>
  );
};
