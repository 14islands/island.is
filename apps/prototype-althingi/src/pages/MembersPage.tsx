/* eslint-disable @nx/enforce-module-boundaries */
import { Link } from 'react-router-dom'

import {
  Box,
  AsyncSearch,
  AsyncSearchOption,
  Text,
  Navigation,
  Breadcrumbs,
  Filter,
  FilterMultiChoice,
  Column,
  Columns,
  Icon,
} from '@island.is/island-ui/core'

import Webreader from '../components/Webreader'
import DefaultLayout from '../layouts/DefaultLayout'
import { MemberCard } from '../components/MemberCard'

import * as styles from './MembersPage.css'

import memberList from '../assets/iceland_parliament_members.json'

const sidebarLinks = [
  {
    href: '#',
    title: 'Sessions & issues',
  },
  {
    active: true,
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

const SearchResultItem = ({ member }: { member: any }) => {
  return (
    <Link to={`/member/${member.value}`} className={styles.searchResultItem}>
      <div className={styles.searchResultItemName}>{member.label}</div>
      <div className={styles.searchResultItemParty}>{member.party}</div>
    </Link>
  )
}

const categories = [
  {
    id: 'price',
    label: 'Party',
    selected: [],
    filters: [
      {
        value: 'samfylkingin',
        label: 'Samfylkingin',
      },
      {
        value: 'flokkur-folksins',
        label: 'Flokkur fólksins',
      },
      {
        value: 'sjalfstaeoisflokkur',
        label: 'Sjálfstæðisflokkur',
      },
      {
        value: 'midflokkurinn',
        label: 'Miðflokkurinn',
      },
      {
        value: 'viðreisn',
        label: 'Viðreisn',
      },
    ],
  },
  {
    id: 'data',
    label: 'Constituency',
    selected: [],
    filters: [
      {
        value: 'reykjavik-north',
        label: 'Reykjavík North',
      },
      {
        value: 'reykjavik-south',
        label: 'Reykjavík South',
      },
      {
        value: 'southwest',
        label: 'Southwest',
      },
      {
        value: 'northwest',
        label: 'Northwest',
      },
      {
        value: 'northeast',
        label: 'Northeast',
      },
      {
        value: 'south',
        label: 'South',
      },
    ],
  },
]

const MembersPage = () => {
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
      <Webreader marginTop={[5, 5, 0]} marginBottom={5} readClass="rs_read" />

      <Box
        paddingBottom={[2, 2, 4]}
        display={['none', 'none', 'block']}
        printHidden
      >
        <Breadcrumbs
          // tagVariant=""
          items={[
            {
              title: 'Ísland.is',
              href: '/',
            },
            {
              title: 'Alþingi',
              href: '/',
            },
            {
              title: 'Members of Parliament',
              // href: '/members',
              // isCurrentPage: true,
              // isTag: true,
            },
          ]}
        />
      </Box>

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
          activeItemTitle={'Members of Parliament'}
        />
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h1" as="h1" paddingTop={[4, 4, 0]} paddingBottom={2}>
          Members of Parliament
        </Text>
        <Text as="p">
          Iceland’s Members of Parliament (MPs) are elected to represent the
          public, propose and debate legislation, and hold the government
          accountable. Together, they form the Alþingi — the national parliament
          — which is one of the oldest in the world, with a history dating back
          over a thousand years.
        </Text>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Columns space={[2, 2, 3, 3]}>
          <Column width="9/12">
            <AsyncSearch
              filter
              colored
              // onInputValueChange={(value) => {}}
              options={memberList.map(
                (member): AsyncSearchOption => ({
                  component: () => <SearchResultItem member={member} />,
                  label: member.label,
                  value: member.value,
                }),
              )}
              placeholder="Type in something"
              size="medium"
            />
          </Column>
          <Column width="content">
            <Filter
              labelClearAll={'Clear filter'}
              labelClear={'Clear1'}
              labelOpen={'Filters'}
              // labelClose={loc.filter.labelClose}
              // labelTitle={loc.filter.labelTitle}
              // labelResult={loc.filter.labelResult}
              onFilterClear={() => null}
              variant="popover"
              resultCount={10}
            >
              <FilterMultiChoice
                labelClear="Hreinsa val"
                categories={categories}
                onChange={(event) => {
                  console.log(event)
                  // setFilter({
                  //   ...filter,
                  //   [event.categoryId]: event.selected,
                  // })
                }}
                onClear={(categoryId) => {
                  // setFilter({
                  //   ...filter,
                  //   [categoryId]: [],
                  // })
                }}
              />
            </Filter>
          </Column>
        </Columns>
      </Box>

      <Box className={styles.memberList}>
        {memberList.map((member) => {
          return (
            <Link
              to={`/member/${member.value}`}
              className={styles.memberListItem}
            >
              <MemberCard
                heading={member.label}
                headingVariant="h4"
                text={member.district || '11. þm. norðvest.'}
                textVariant="medium"
                colorScheme="dark"
                icon={<Icon icon="chevronForward" color="blue400" />}
                {...{
                  alt: 'Logo',
                  objectFit: 'contain',
                  src: '/assets/images/member1.jpg',
                }}
                tags={[
                  {
                    label: member.party,
                  },
                ]}
              />
            </Link>
          )
        })}
      </Box>
    </DefaultLayout>
  )
}

export default MembersPage
