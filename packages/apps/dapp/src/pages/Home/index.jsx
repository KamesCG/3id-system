
import { Site } from 'templates'

import {
  AccessProfileExample, 
  AccessSpaceExample,
  AccessThreadExample,
  AddLoginExample,
  EnableEthereumExample,
  InitProviderExample,
  ReferenceExample,
  SpaceOpenExample,
  StorageDeleteExample,
  StorageMergeExample,
  StorageProfileSetExample,
  StorageRenderExample,
  ThreadJoinExample,
  ThreadPostDeleteExample,
  ThreadPostPublishExample
 } from 'content/examples'

 const showcase = {
  title: 'Web3 Identity. Made Easy.',
  tagline: 'Authentication, Storage and Messaging on easy mode with 3ID System.',
}

/* --- Content --- */
const featureOne = {
  title: 'Authentication',
  tagline: 'Connect to Etheruem',
  summary: 'Authenticate with users via the normal wallet interface. Request verifications. Validate identity. Everything that you normally require from a social identity system can easily be handled through a few simple cryptographic signatures.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673590.svg',

}
const featureTwo = {
  title: 'Storage',
  tagline: 'Store Data in the Decentralized Cloud',
  summary: 'Included with every 3Box decentralized identity is public and private Storage. Minimize application database costs and give privacy back to users. A win/win for everyone. Storage is just the beginning. Content management systems, shared team accounts, and much more is possible.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
}
const featureThree = {
  title: 'Communication',
  tagline: 'Connect with The World Around You',
  summary: 'The messaging and thread system included in the 3Box core features is perfect for temporary chat rooms, community curated lists, public profiles status updates, and even backend notifications systems between decentraized identities.',
  image: 'https://image.flaticon.com/icons/svg/1673/1673579.svg',
}

/* --- Component --- */
const Home = props =>
  <Site sx={{ bg: 'smoke' }} sxMain={{ alignItems: 'center', justifyContent: 'center' }}>
    <Molecule.Card
      layout='showcase'
      variants={['large', 'centered']}
      sx={{
        p: 3
      }}
      sxTitle={{
        fontWeight: 700
      }}
      sxTagline={{
        fontWeight: 300
      }}
      sxMain={{
        maxWidth: 980
      }}
      {...showcase}
      image={null}
    />

    {/* Features */}
    <Atom.Container my={5}>
      <Atom.Flex sx={{}}>
        <Molecule.Card
          {...featureOne}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureTwo}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />

        <Molecule.Card
          {...featureThree}
          sx={{ flex: 1, p: 3 }}
          sxImage={{ maxWidth: 55, p: 2, pr: 3 }}
        />
      </Atom.Flex>
    </Atom.Container>

    <InitProviderExample />
    <EnableEthereumExample />

    <Atom.Heading xxl heavy>Authenticate</Atom.Heading>
    <Atom.Paragraph>
      Login, Open Spaces and Join Threads.
    </Atom.Paragraph>
    <AddLoginExample />
    <SpaceOpenExample />
    <ThreadJoinExample />

    <Atom.Heading xxl heavy>Access</Atom.Heading>
    <Atom.Paragraph>
      Control access to components based on authentication level.
    </Atom.Paragraph>
    <AccessProfileExample />
    <AccessSpaceExample />
    <AccessThreadExample />

    <Atom.Heading xxl heavy>Storage</Atom.Heading>
    <Atom.Paragraph>
      Manage data controlled by a 3Box decentralized identity.
    </Atom.Paragraph>
    <StorageProfileSetExample/>
    <StorageMergeExample />
    <StorageDeleteExample />

    <Atom.Heading xxl heavy>Messaging</Atom.Heading>
    <Atom.Paragraph>
      Publish posts to public threads or keep it temporary with ghost threads.
    </Atom.Paragraph>
    <ThreadPostPublishExample />
    <ThreadPostDeleteExample />

    <Atom.Heading xxl heavy>Rendering</Atom.Heading>
    <Atom.Paragraph>
      Simplified Data Rendering and Content References
    </Atom.Paragraph>
    <StorageRenderExample />
    <ReferenceExample />
  </Site>

export default Home




