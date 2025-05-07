import { Link } from 'react-router-dom'

import {
  Box,
  Navigation,
  Breadcrumbs,
  Text,
  Columns,
  Column,
  Stack,
  CategoryCard,
  Icon,
  AlertBanner,
} from '@island.is/island-ui/core'

import memberList from '../assets/iceland_parliament_members.json'

import DefaultLayout from '../layouts/DefaultLayout'
import Webreader from '../components/Webreader'

import * as styles from './LandingPage.css'

// eslint-disable-next-line @nx/enforce-module-boundaries
import { NewsCard } from '@island.is/web/components'

const SearchResultItem = ({ member }: { member: any }) => {
  return (
    <div className={styles.searchResultItem}>
      <div className={styles.searchResultItemName}>{member.label}</div>
      <div className={styles.searchResultItemParty}>{member.party}</div>
    </div>
  )
}

const sidebarLinks = [
  {
    href: '#',
    title: 'Sessions & issues',
  },
  {
    active: false,
    href: '/members',
    title: 'Members of Parliament',
  },
  {
    href: '#',
    title: 'Committees',
  },
  {
    href: '#',
    title: 'International work',
  },
  {
    href: '#',
    title: 'Laws',
  },
  {
    href: '#',
    title: 'Resolutions',
  },
  {
    href: '#',
    title: 'Reports',
  },
  {
    href: '#',
    title: 'About',
  },
]

export const LandingPage = () => {
  return (
    <DefaultLayout
      data-testid="landing-page"
      sidebarChildren={
        <Navigation
          title="Alþingi"
          baseId="desktopNav"
          colorScheme="blue"
          items={sidebarLinks}
          renderLink={(link) => {
            return <Link to={link.props.href}>{link}</Link>
          }}
        />
      }
    >
      {/* <Box
        paddingBottom={[2, 2, 4]}
        display={['none', 'none', 'block']}
        printHidden
      >
        <Breadcrumbs
          items={[
            {
              title: 'Ísland.is',
              href: '/',
            },
            {
              title: 'Alþingi',
              href: '/',
            },
          ]}
        />
      </Box> */}

      <Webreader marginTop={[5, 5, 0]} marginBottom={5} readClass="rs_read" />

      <Box display={['block', 'block', 'none']}>
        <Navigation
          baseId="mobileNav"
          colorScheme="blue"
          isMenuDialog
          renderLink={(link) => {
            return <Link to={link.props.href}>{link}</Link>
          }}
          items={sidebarLinks}
          title={'Alþingi'}
          // activeItemTitle={null}
        />
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h1" as="h1" paddingTop={[4, 4, 0]} paddingBottom={4}>
          Alþingi - Parliament of Iceland
        </Text>
        <Text variant="intro" as="p">
          Alþingi passes laws, approves the state budget, monitors the work of
          the government, and represents the people’s interests. Established in
          930 AD, it is one of the oldest parliaments in the world.
        </Text>
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={2}>
          Happening now
        </Text>
        <Stack space={2}>
          <NewsCard
            title="Budget Committee Meeting"
            introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction."
            href="#"
            readMoreText="Watch broadcast"
            image={{
              url: '/assets/images/event-live.jpg',
              title: 'new item',
            }}
          />
          <NewsCard
            title="Review of the social security disability pension system"
            introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with Act No. 88/2024 . The office's website is www.mannrettindi.is , but it is still under construction."
            href="#"
            readMoreText="Read more"
            image={{
              url: '/assets/images/event-voting.jpg',
              title: 'new item',
            }}
          />
        </Stack>
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={2}>
          Latest news
        </Text>
        <Stack space={2}>
          <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
            <Column width="6/12">
              <NewsCard
                title="The Icelandic Human Rights Institute is launched"
                introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                href="#"
                readMoreText="Read more"
                date="2025-05-05"
              />
            </Column>
            <Column width="6/12">
              <NewsCard
                title="The Icelandic Human Rights Institute is launched"
                introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                href="#"
                readMoreText="Read more"
                date="2025-05-05"
              />
            </Column>
          </Columns>
          <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
            <Column width="6/12">
              <NewsCard
                title="The Icelandic Human Rights Institute is launched"
                introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                href="#"
                readMoreText="Read more"
                date="2025-05-05"
              />
            </Column>
            <Column width="6/12">
              <NewsCard
                title="The Icelandic Human Rights Institute is launched"
                introduction="The Icelandic Human Rights Institute began operations on May 1st and operates under the auspices of the Althingi in accordance with..."
                href="#"
                readMoreText="Read more"
                date="2025-05-05"
              />
            </Column>
          </Columns>
        </Stack>
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h2" as="h2" paddingTop={[4, 4, 4]} paddingBottom={2}>
          Quick links
        </Text>
        <Stack space={2}>
          <CategoryCard
            heading="Have your say in lawmaking today"
            text="Join the conversation and help shape new laws and policies. Share your views, submit suggestions, and take part in the democratic process — no legal background required."
            icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
          />
          <CategoryCard
            heading="Have your say in lawmaking today"
            text="Join the conversation and help shape new laws and policies. Share your views, submit suggestions, and take part in the democratic process — no legal background required."
            icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
          />
          <CategoryCard
            heading="Have your say in lawmaking today"
            text="Join the conversation and help shape new laws and policies. Share your views, submit suggestions, and take part in the democratic process — no legal background required."
            icon={<Icon icon={'school'} type={'outline'} color={'blue400'} />}
          />
        </Stack>
      </Box>
      {/* </GridContainer> */}
    </DefaultLayout>
  )
}

export default LandingPage
