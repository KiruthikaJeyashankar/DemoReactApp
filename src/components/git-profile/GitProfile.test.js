import { render, screen } from "@testing-library/react"
import GitProfile from "./GitProfile"
import userEvent from "@testing-library/user-event"

describe('Git profile test', () => {
    it('should render button to load data', () => {
        render(<GitProfile url={myUrl} />)

        expect(screen.getByRole('button', { name: 'Load data' })).toBeInTheDocument()
    })

    it('should show Loader text when Load data button is clicked', () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    
})