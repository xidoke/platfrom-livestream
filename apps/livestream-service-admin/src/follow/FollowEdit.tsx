import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FollowEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="follower_id" source="followerId" />
        <TextInput label="following_id" source="followingId" />
      </SimpleForm>
    </Edit>
  );
};
