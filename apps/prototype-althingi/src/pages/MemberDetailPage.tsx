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
  Tabs,
  Stack,
  BulletList,
  Bullet,
  ActionCard,
  Tag,
  Hidden,
  Link as IslandLink,
} from '@island.is/island-ui/core'

import Webreader from '../components/Webreader'
import DefaultLayout from '../layouts/DefaultLayout'

import * as styles from './MemberDetailPage.css'

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

const categories = [
  {
    id: 'type',
    label: 'Type',
    selected: [],
    filters: [
      {
        value: 'bills',
        label: 'Bills',
      },
      {
        value: 'docs',
        label: 'Documents',
      },
    ],
  },
]

const content1 = (
  <Box paddingY={6}>
    <Stack space="gutter">
      <Text variant="h3">Active committee seats</Text>
      <Text variant="default" as="div">
        <BulletList color="dark400">
          <Bullet>Prime Minister since 21 December 2024.</Bullet>
          <Bullet>
            Chairman of the <a href="#">Icelandic Coalition Party</a> since
            2022.
          </Bullet>
          <Bullet>
            Member of{' '}
            <a href="#">Parliament for the Reykjavík South constituency</a>{' '}
            since 2021 (Samfylkingin).
          </Bullet>
        </BulletList>
      </Text>

      <Text variant="h3" paddingTop={3}>
        Biography
      </Text>
      <Text variant="default" as="p">
        Born in Reykjavík on May 12, 1988. Parents: Frosti Fífill Jóhannsson
        (born April 27, 1952) ethnologist and Steinunn Guðný H. Jónsdóttir (born
        September 18, 1956) physician. Spouse: Einar Bergur Ingvarsson (born May
        4, 1983) business analyst. Parents: Ingvar Einarsson and Ragnhildur
        Jónsdóttir. Daughter: María Herdís (2019).
      </Text>
      <Text variant="default" as="p">
        Matriculation examination MR 2008. BS in Economics from the University
        of Iceland 2011. MA in Economics from Boston University 2014. MA in
        International Studies with an emphasis on Economic Policy and
        International Finance from Yale University 2016.
      </Text>
      <Text variant="default" as="p">
        Worked alongside her economics studies at the Central Bank Governor's
        Office 2009–2010. Economist in the research department of Arion Bank
        2011–2012. Journalist at Viðskiptablaðið 2013–2014. Economist in a
        working group under the Prime Minister's Office 2014. Specialist in the
        research department of the investment bank Morgan Stanley in New York
        and London 2015–2017. Economist at the Icelandic Chamber of Commerce
        2017. Chairman of the Agricultural Product Pricing Committee at the
        Ministry of Employment and Labour 2017–2018. Adjunct at the Faculty of
        Economics, University of Iceland 2018–2020. Chief Economist at Kvika
        Bank hf. 2018–2021.
      </Text>
      <Text variant="default" as="p">
        Biography last edited on December 21, 2024.
      </Text>
    </Stack>
  </Box>
)
const content2 = (
  <Box paddingY={6}>
    <Stack space={3}>
      <Columns space={[2, 2, 3, 3]}>
        <Column width="9/12">
          <AsyncSearch
            filter
            colored
            // onInputValueChange={(value) => {}}
            options={[
              {
                label: 'General Penal Code',
                value: 'general-penal-code',
              },
              {
                label: 'Maternity and parental leave',
                value: 'maternity-and-parental-leave',
              },
              {
                label: 'Preschool enrollment',
                value: 'preschool-enrollment',
              },
            ]}
            placeholder="Search Kristrún’s recent bills and documents by title or topics"
            size="medium"
          />
        </Column>
        <Column width="3/12">
          <Filter
            align="right"
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

      <ActionCard
        heading="General Criminal Code"
        renderHeading={(heading) => (
          <Box display="flex" alignItems="center" columnGap={2}>
            <Icon icon="document" type="outline" color="blue400" />
            {heading}
          </Box>
        )}
        text="Reintroduced · First reading"
        date="17. júní 1944"
        eyebrow="Case 358"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Personal rights',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Courts and Legal Process
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 33,
          maxProgress: 100,
          withLabel: false,
        }}
      />
      <ActionCard
        heading="Maternity and parental leave"
        renderHeading={(heading) => (
          <Box display="flex" alignItems="center" columnGap={2}>
            <Icon icon="document" type="outline" color="blue400" />
            {heading}
          </Box>
        )}
        text="Introduced · Expired"
        date="17. október 2024"
        eyebrow="Case 225"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Equality',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Business
              </Tag>
              <Tag outlined variant="blue">
                Procurement
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 12,
          maxProgress: 100,
          withLabel: false,
          variant: 'rose',
        }}
      />
      <ActionCard
        heading="Preschool enrollment"
        renderHeading={(heading) => (
          <Box display="flex" alignItems="center" columnGap={2}>
            <Icon icon="document" type="outline" color="blue400" />
            {heading}
          </Box>
        )}
        text="Introduced · Expired"
        date="17. september 2024"
        eyebrow="Case 290"
        cta={{
          label: 'Skoða frumvarp',
          variant: 'text',
        }}
        tag={{
          label: 'Children',
          variant: 'blue',
          renderTag: (cld) => (
            <Box display="flex" alignItems="center" columnGap={1}>
              {cld}
              <Tag outlined variant="blue">
                Family matters
              </Tag>
              <Tag outlined variant="blue">
                Kindergardens
              </Tag>
            </Box>
          ),
        }}
        progressMeter={{
          currentProgress: 66,
          maxProgress: 100,
          withLabel: false,
          variant: 'rose',
        }}
      />
    </Stack>
  </Box>
)
const content3 = (
  <Box paddingY={6}>
    <Stack space="gutter">
      <Text variant="default">Placeholder</Text>
      <Text variant="default" as="p">
        Tab content
      </Text>
    </Stack>
  </Box>
)
const tabs = [
  {
    label: 'Biography',
    content: content1,
  },
  { label: 'Activity (23)', content: content2 },
  { label: 'Speeches (4)', content: content3 },
  { label: 'Votes (125)', content: content3 },
  { label: 'Career', content: content3 },
  { label: 'Accountability', content: content3 },
]

const MemberDetailPage = () => {
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
        paddingBottom={[2, 2, 6]}
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
              href: '/members',
              // isCurrentPage: true,
              // isTag: true,
            },
          ]}
        />
      </Box>

      <Box display={['block', 'block', 'none']} paddingBottom={[5, 5, 0]}>
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

      <Box
        display="flex"
        alignItems="center"
        // columnGap={5}
        paddingBottom={[5, 5, 10]}
      >
        <Box flexShrink={0} minWidth={0}>
          <Hidden below="md">
            <Box paddingRight={5}>
              <img
                src="/assets/images/member-pm.jpg"
                alt="Kristrún Frostadóttir"
                width={'120'}
                height={'120'}
              />
            </Box>
          </Hidden>
        </Box>
        <Box>
          <Hidden above="sm">
            <Box paddingBottom={3}>
              <img
                src="/assets/images/member-pm.jpg"
                alt="Kristrún Frostadóttir"
                width={'120'}
                height={'120'}
              />
            </Box>
          </Hidden>
          <Text
            variant="medium"
            as="p"
            paddingTop={[0, 0, 0]}
            paddingBottom={0}
          >
            1st MP of Reykjavík North
          </Text>
          <Text variant="h1" as="h1" paddingTop={[0, 0, 0]} paddingBottom={3}>
            Kristrún Frostadóttir
          </Text>
          <Text as="p">
            Kristrún Frostadóttir is Prime Minister of Iceland and MP for
            Reykjavík South since 2021. An economist, she previously worked at
            Morgan Stanley and led Kvika Bank’s research before entering
            politics.
          </Text>
        </Box>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Columns space={[2, 2, 3, 3]} collapseBelow="lg">
          <Column width="content">
            <Box className={styles.card}>
              <Box padding={3} className={styles.cardHeader}>
                <Text variant="h5" as="h2">
                  Upplýsingar
                </Text>
              </Box>
              <Box padding={3}>
                <Columns space={[2, 2, 2, 1, 2]}>
                  <Column width="content">
                    <Stack space={2}>
                      <Text variant="eyebrow">Position</Text>
                      <Text variant="eyebrow">Ministry</Text>
                      <Text variant="eyebrow">Upphaf þingsetu</Text>
                      <Text variant="eyebrow">Social Media</Text>
                    </Stack>
                  </Column>
                  <Column width="content">
                    <Stack space={2}>
                      <Text variant="small">Prime Minister</Text>

                      <Text variant="small" color="blue400">
                        <IslandLink href="#">
                          Prime Minister's Office
                        </IslandLink>
                      </Text>
                      <Text variant="small" color="blue400">
                        <IslandLink href="mailto:kristrun.frostadottir@althingi.is">
                          kristrun.frostadottir@althingi.is
                        </IslandLink>
                      </Text>
                      <img
                        src="/assets/images/social-mockup.png"
                        alt="Social links mockup"
                        style={{ height: '16px' }}
                      />
                    </Stack>
                  </Column>
                </Columns>
              </Box>
            </Box>
          </Column>
          <Column>
            <div data-david className={styles.cardHeightWrapper}>
              <Columns space={[2, 2, 3, 3]} collapseBelow="sm">
                <Column>
                  <Box className={styles.card}>
                    <Box padding={3} className={styles.cardHeader}>
                      <Text variant="h5" as="h2">
                        Kjördæmi
                      </Text>
                    </Box>
                    <Box padding={3} className={styles.cardContent}>
                      <div className={styles.cardImage}>
                        <img
                          src="/assets/images/member-map.png"
                          alt="Reykv. n"
                        />
                      </div>
                      <Text variant="small">
                        <IslandLink href="#">Reykv. n</IslandLink>
                      </Text>
                    </Box>
                  </Box>
                </Column>
                <Column>
                  <Box className={styles.card}>
                    <Box padding={3} className={styles.cardHeader}>
                      <Text variant="h5" as="h2">
                        Þingflokkur
                      </Text>
                    </Box>
                    <Box padding={3} className={styles.cardContent}>
                      <div className={styles.cardImage}>
                        <img
                          src="/assets/images/member-party.png"
                          alt="Samfylkingin"
                          style={{ width: '50%' }}
                        />
                      </div>
                      <Text variant="small">
                        <IslandLink href="#">Samfylkingin</IslandLink>
                      </Text>
                    </Box>
                  </Box>
                </Column>
              </Columns>
            </div>
          </Column>
        </Columns>
      </Box>

      <Box paddingBottom={[5, 5, 10]}>
        <Tabs
          label="Learn more about Kristrún Frostadóttir"
          tabs={tabs}
          contentBackground="transparent"
          variant="alternative"
          size="xs"
        />
      </Box>
    </DefaultLayout>
  )
}

export default MemberDetailPage
