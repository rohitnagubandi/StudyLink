/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStudyGroupCard = /* GraphQL */ `
  mutation CreateStudyGroupCard(
    $input: CreateStudyGroupCardInput!
    $condition: ModelStudyGroupCardConditionInput
  ) {
    createStudyGroupCard(input: $input, condition: $condition) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStudyGroupCard = /* GraphQL */ `
  mutation UpdateStudyGroupCard(
    $input: UpdateStudyGroupCardInput!
    $condition: ModelStudyGroupCardConditionInput
  ) {
    updateStudyGroupCard(input: $input, condition: $condition) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStudyGroupCard = /* GraphQL */ `
  mutation DeleteStudyGroupCard(
    $input: DeleteStudyGroupCardInput!
    $condition: ModelStudyGroupCardConditionInput
  ) {
    deleteStudyGroupCard(input: $input, condition: $condition) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMemberCard = /* GraphQL */ `
  mutation CreateMemberCard(
    $input: CreateMemberCardInput!
    $condition: ModelMemberCardConditionInput
  ) {
    createMemberCard(input: $input, condition: $condition) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMemberCard = /* GraphQL */ `
  mutation UpdateMemberCard(
    $input: UpdateMemberCardInput!
    $condition: ModelMemberCardConditionInput
  ) {
    updateMemberCard(input: $input, condition: $condition) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMemberCard = /* GraphQL */ `
  mutation DeleteMemberCard(
    $input: DeleteMemberCardInput!
    $condition: ModelMemberCardConditionInput
  ) {
    deleteMemberCard(input: $input, condition: $condition) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createProfileCard = /* GraphQL */ `
  mutation CreateProfileCard(
    $input: CreateProfileCardInput!
    $condition: ModelProfileCardConditionInput
  ) {
    createProfileCard(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfileCard = /* GraphQL */ `
  mutation UpdateProfileCard(
    $input: UpdateProfileCardInput!
    $condition: ModelProfileCardConditionInput
  ) {
    updateProfileCard(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfileCard = /* GraphQL */ `
  mutation DeleteProfileCard(
    $input: DeleteProfileCardInput!
    $condition: ModelProfileCardConditionInput
  ) {
    deleteProfileCard(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createAnnouncement = /* GraphQL */ `
  mutation CreateAnnouncement(
    $input: CreateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    createAnnouncement(input: $input, condition: $condition) {
      id
      title
      username
      date
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAnnouncement = /* GraphQL */ `
  mutation UpdateAnnouncement(
    $input: UpdateAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    updateAnnouncement(input: $input, condition: $condition) {
      id
      title
      username
      date
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAnnouncement = /* GraphQL */ `
  mutation DeleteAnnouncement(
    $input: DeleteAnnouncementInput!
    $condition: ModelAnnouncementConditionInput
  ) {
    deleteAnnouncement(input: $input, condition: $condition) {
      id
      title
      username
      date
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      createdAt
      updatedAt
      __typename
    }
  }
`;
