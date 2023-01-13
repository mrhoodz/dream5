// "use client";

// import { ServiceSection } from './serviceSection';
import React from "react";
import { Land } from "./land/land";
import { ServiceSection } from "./serviceSection/serviceSection";
import { Rest } from "../../data";
import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";

export default async function page({ params }: any) {
  // const router = useRouter();
  // const { slug } = router.query;

  // const data: any = await getData("slug");

  const services = Rest;
  // console.log(Object.values(params)[0]);

  function checkSlug(params: any) {
    if (params == "agricultural-engineering") {
      const x = services[0];
      // console.log(x);
      return x;
    }
    if (params == "mechanical-engineering") {
      const x = services[1];
      // console.log(x);
      return x;
    } else {
      // console.log("hey there");
    }
  }

  checkSlug(Object.values(params)[0]);

  // console.log(services);

  return (
    <>
      <Land info={checkSlug(Object.values(params)[0])} />

      <ServiceSection info={checkSlug(Object.values(params)[0])}   />
    </>
  );
}

// async function getData(context: any) {
//   // console.log(serviceResponse.data);
//   const { params } = context;
//   const slugId = params.slug;

//   // const x = await axios.post("http://127.0.0.1:3000/api/postTest", {
//   //   slug: slugId,
//   // });

//   const graphQLClient = new GraphQLClient(
//     "https://sea-lion-app-ggqop.ondigitalocean.app/graphql"
//   );

//   const variables = {
//     slug: slugId,
//   };

//   // const query = gql`
//   //   query ($slug: String!) {
//   //     services(filters: { slug: { eq: $slug } }) {
//   //       data {
//   //         attributes {
//   //           Name

//   //           Task {
//   //             Task
//   //           }

//   //           Images {
//   //             __typename
//   //             ... on UploadFileRelationResponseCollection {
//   //               data {
//   //                 attributes {
//   //                   url
//   //                 }
//   //               }
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
//   // `;

//   const queryAll = gql`
//     query {
//       services {
//         data {
//           attributes {
//             Name
//             slug
//             Images {
//               __typename
//               ... on UploadFileRelationResponseCollection {
//                 data {
//                   attributes {
//                     url
//                   }
//                 }
//               }
//             }

//             Task {
//               Task
//             }
//           }
//         }
//       }
//     }
//   `;

//   // const data = await graphQLClient.request(query, variables);

//   // const attributes = data.services.data;

//   const dataAll = await graphQLClient.request(queryAll);

//   const attributesAll = dataAll.services.data;

//   const datad = {
//     // theName: attributes,
//     theNameAll: attributesAll,
//   };
//   console.log("test");

//   return datad;
// }
