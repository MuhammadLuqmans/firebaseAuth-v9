import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
import Carosule from './Carosule'

export default function Homepage() {
 const { currentUser } = useAuth()
  return (
    <Layout>
      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight='black'
          fontStyle='italic'
          fontSize='9xl'
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight='black'
          fontSize='4xl'
          mx={2}
          px={2}
          colorScheme='green'
        >
          NEW API
        </Badge>
      </Heading>
     
      <Carosule />
        
  
      
    </Layout>
  )
}
