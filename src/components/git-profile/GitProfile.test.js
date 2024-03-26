import { render, screen } from "@testing-library/react"
import GitProfile from "./GitProfile"
import userEvent from "@testing-library/user-event"

describe('Git profile test', () => {
    const gitProfileUrl = "/mock/url"
    it('should render button to load data', () => {
        render(<GitProfile url={gitProfileUrl} />)

        expect(screen.getByRole('button', { name: 'Load data' })).toBeInTheDocument()
    })

    it('should show Loader text when Load data button is clicked', () => {
        render(<GitProfile url={gitProfileUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    
})