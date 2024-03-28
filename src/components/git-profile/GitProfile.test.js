import { render, screen, waitFor } from "@testing-library/react"
import GitProfile from "./GitProfile"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { when } from "jest-when"

jest.mock("axios")

describe('Git profile test', () => {
    const gitProfileUrl = "/mock/url"
    beforeEach(() => {
        when(axios.get).calledWith(gitProfileUrl).mockResolvedValue({
            data: {
                "login": "MockUser1",
                //..other parts
            }
        })
    })

    test('should render button to load data', () => {
        render(<GitProfile url={gitProfileUrl} />)

        expect(screen.getByRole('button', { name: 'Load data' })).toBeInTheDocument()
    })

    test('should show Loader text when Load data button is clicked', () => {
        render(<GitProfile url={gitProfileUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    test('should not show the Load data button when it is loading', () => {
        render(<GitProfile url={gitProfileUrl} />)

        userEvent.click(screen.getByRole("button", { name: "Load data" }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
        expect(screen.queryByRole("button", { name: "Load data" })).not.toBeInTheDocument()
    })

    test('should make network call when Load data button is clicked', () => {
        render(<GitProfile url={gitProfileUrl} />)

        userEvent.click(screen.getByRole("button", { name: "Load data" }))

        expect(axios.get).toHaveBeenCalledWith(gitProfileUrl)
    })

    test('should show the data when Load data button clicked and network call is done', async () => {
        render(<GitProfile url={gitProfileUrl} />)

        userEvent.click(screen.getByRole("button", { name: "Load data" }))

        await waitFor(() => {
            expect(screen.getByText("Hello MockUser1!")).toBeInTheDocument()
        })
    })
})