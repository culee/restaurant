import React from "react"
import {connect} from "react-redux"
import styled from "styled-components"
import Heading from 'Atom/Heading'
import {State, TableDataType} from "Type/store"

const StyledBill = styled(p => <Heading variant='medium' {...p} />)`
    padding-top: 8px;
    color: ${p => p.theme['700']}
`
const Unit = styled.span`
    font-size: 18px;
    color: ${p => p.theme['N700']}
`

interface Props {
    items: Array<TableDataType>
}

const Bill: React.FC<Props> = ({items}) => {
    const total: any = items.reduce((total: number, item: TableDataType) => total + item.price * item.quantity, 0)

    return (
        <StyledBill className="tc">
            Total: <Unit>$</Unit>
            {total}
        </StyledBill>
    )
}

const mapStateToProps = (state: State) => ({
    items: state.tableData[state.selectedTable]
})

export default connect(mapStateToProps)(Bill)
