/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n": types.LoginWithGoogleDocument,
    "#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n": types.CreatePostDocument,
    "#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n": types.LikePostDocument,
    "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n": types.GetCurrentUserDocument,
    "#graphql\n    query GetFeedPosts {\n        getFeedPosts {\n            id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            userHasLiked\n        }\n    }\n": types.GetFeedPostsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n"): (typeof documents)["#graphql\nmutation LoginWithGoogle($token: String!) {\n  loginWithGoogle(token: $token)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n"): (typeof documents)["#graphql\n    mutation CreatePost($payload: createPostData!) {\n        createPost(payload: $payload) {\n            id  \n            imgURL\n            content\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n"): (typeof documents)["#graphql\n    mutation LikePost($postId: String!) {\n  likePost(postId: $postId)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetCurrentUser {\n        getCurrentUser {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql\n    query GetFeedPosts {\n        getFeedPosts {\n            id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            userHasLiked\n        }\n    }\n"): (typeof documents)["#graphql\n    query GetFeedPosts {\n        getFeedPosts {\n            id  \n            imgURL\n            content\n\n            author {\n            id\n            profileImageURL\n            email\n            username\n            fullName\n            isVerified\n            }\n\n            totalLikeCount\n            userHasLiked\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;