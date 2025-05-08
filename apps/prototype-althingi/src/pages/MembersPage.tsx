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
    title: 'Forsíða',
  },
  {
    href: '#',
    title: 'Þingmál',
  },
  {
    href: '/members',
    title: 'Þingmenn',
    active: true,
  },
  {
    href: '#',
    title: 'Nefndir',
  },
  {
    href: '#',
    title: 'Alþjóðastarf',
  },
  {
    href: '#',
    title: 'Lagasafn',
  },
  {
    href: '#',
    title: 'Ályktanir',
  },
  {
    href: '#',
    title: 'Um Alþingi',
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
          title="Valmynd"
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
          title={'Valmynd'}
          activeItemTitle={'Þingmenn'}
        />
      </Box>
      <Box paddingBottom={[5, 5, 10]}>
        <Text variant="h1" as="h1" paddingTop={[4, 4, 0]} paddingBottom={2}>
          Þingmenn
        </Text>
        <Text as="p">
          Alþingismenn eru þjóðkjörnir fulltrúar sem fara sameiginlega með vald
          til að setja þegnum landsins lög auk þess sem þeir fara með
          fjárstjórnarvald.
        </Text>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Columns space={[2, 2, 3, 3]}>
          <Column>
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
              placeholder="Leit að þingmanni"
              size="medium"
            />
          </Column>
          <Column width="content">
            <Filter
              labelClearAll={'Clear filter'}
              labelClear={'Clear1'}
              labelOpen={'Síur'}
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
                  src: member.image || '/assets/images/member1.jpg',
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
