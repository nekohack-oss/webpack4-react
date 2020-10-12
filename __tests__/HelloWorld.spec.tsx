import * as React from 'react'
import renderer from 'react-test-renderer'
import HelloWorld from '../src/components/HelloWorld'

describe('Content', () => {
    it('render correctly', () => {
        const tree = renderer
            .create(<HelloWorld msg="Hello React 16.13" />)
            .toJSON()
        expect(tree).toMatchSnapshot()
    })
})
