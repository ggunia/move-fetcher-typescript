import React, { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { ActorDetailType } from '../typescriptTypes'
import useQueryFetcher from '../useQueryFetcher'

const StyledList = styled.ul`
  width: 90%;
  margin: auto;
`

const initialValue: ActorDetailType = {
  id: 0,
  name: '',
  biography: '',
}

const ActorDetails: FunctionComponent<{ apiEndpointPrefix: string }> = ({ apiEndpointPrefix }) => {
  const params: { id?: string } = useParams()

  const parseResponse = React.useCallback(
    data => data,
    []
  )

  const { loading, data } = useQueryFetcher<ActorDetailType>({
    apiEndpoint: `${apiEndpointPrefix}/${params.id}`,
    initialValue,
    parseResponse,
  })

  if (loading) return <div>Loading actor details...</div>

  return (
    <StyledList>
      <li>Name -> {data.name}</li>
      <li>Biography -> {data.biography}</li>
    </StyledList>
  )
}

export default ActorDetails
