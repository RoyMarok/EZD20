import React from 'react'

import {
    Button,
    FlexWrapper,
    GridCell,
    Value
} from '../../styled'

import { IconedField } from './iconed-field'
import { ValueField } from './value-field'
import { SquareChooser } from './square-choser'

export const Might = ({ values = [], limits, onChange, value, filled, controlled = true }) => (
    <IconedField
        title="strength"
        filled={filled}
    >
        {values.length > 0 ? <SquareChooser
            values={values}
            limits={limits}
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        />}

    </IconedField>
)

export const Dex = ({ values = [], limits, onChange, value, filled, controlled = true }) => (
    <IconedField
        title="agility"
        filled={filled}
    >
        {values.length > 0 ? <SquareChooser
            values={values}
            limits={limits}
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        />}
    </IconedField>
)

export const Mind = ({ values = [], limits, onChange, value, filled, controlled = true }) => (
    <IconedField
        title="perception"
        filled={filled}
    >
        {values.length > 0 ? <SquareChooser
            values={values}
            limits={limits}
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        />}
    </IconedField>
)

export const Brain = ({ values = [], limits, onChange, value, filled, controlled = true }) => (
    <IconedField
        title="intelligence"
        filled={filled}
    >
        {values.length > 0 ? <SquareChooser
            values={values}
            limits={limits}
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        />}
    </IconedField>
)

export const Health = ({ onChange, value, filled, controlled = true }) => (
    <IconedField
        title="health"
        filled={filled}
    >
        {controlled ?<ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <GridCell black width={2} height="2" center big>
            {value}
        </GridCell>}
    </IconedField>
)

export const Move = ({ onChange, value, filled, changeFly, fly, controlled = true }) => (
    <IconedField
        title={fly ? 'fly' : 'move'}
        filled={filled}
        iconButton
        iconButtonClick={changeFly}
    >
        {controlled ? <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <GridCell black width={2} height="2" center big>
            {value}
        </GridCell>}
    </IconedField>
)

export const Panic = ({ onChange, value, filled, controlled = true }) => (
    <IconedField
        title="panic"
        filled={filled}
    >
        {controlled ? <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <GridCell black width={2} height="2" center big>
            {value}
        </GridCell>}
    </IconedField>
)

export const Defence = ({ onChange, value, filled, controlled = true }) => (
    <IconedField
        title="defence"
        filled={filled}
    >
        {controlled ? <ValueField
            onChange={onChange}
            value={value}
            filled={filled}
        /> : <GridCell black width={2} height="2" center big>
            {value}
        </GridCell>}
    </IconedField>
)

export const Actions = ({ onChange, value, filled, controlled = true }) => (
    <IconedField
        title="atom"
        filled={filled}
    >
        {controlled ?<SquareChooser
            values={[1, 2, 3, 4]}
            onChange={onChange}
            value={value}
        /> : <GridCell black width={2} height="2" center big>
            {value}
        </GridCell>}
    </IconedField>
)

export const Attributes = (props) => {
    const {
        values,
        attributes,
        changes,
        limits,
        controlled,
        actions
    } = props
    const {
        strength,
        agility,
        perception,
        intelligence,
        health,
        move,
        panic,
        defence,
        fly
    } = attributes
    return (
        <GridCell width={8} height={6} center>
            <FlexWrapper>
                <Might
                    values={values}
                    limits={limits.strength}
                    onChange={changes.strength}
                    value={strength}
                    filled
                    controlled={controlled}
                />
                <Dex
                    values={values}
                    limits={limits.agility}
                    onChange={changes.agility}
                    value={agility}
                    controlled={controlled}
                />
                <Mind
                    values={values}
                    limits={limits.perception}
                    onChange={changes.perception}
                    value={perception}
                    filled
                    controlled={controlled}
                />
                <Brain
                    values={values}
                    limits={limits.intelligence}
                    onChange={changes.intelligence}
                    value={intelligence}
                    controlled={controlled}
                />
            </FlexWrapper>
            <FlexWrapper>
                <Health
                    onChange={changes.health}
                    value={health}
                    filled
                    controlled={controlled}
                />
                <Move
                    onChange={changes.move}
                    value={move}
                    fly={fly}
                    changeFly={changes.fly}
                    controlled={controlled}
                />
                <Defence
                    onChange={changes.defence}
                    value={defence}
                    filled
                    controlled={controlled}
                />
                <Actions
                    onChange={changes.actions}
                    value={actions}
                    controlled={controlled}
                />
            </FlexWrapper>
        </GridCell>
    )
}
