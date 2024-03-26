import { render, screen, waitFor } from "@testing-library/react"
import GitProfile from "./GitProfile"
import userEvent from "@testing-library/user-event"
import axios from "axios"
import { when } from "jest-when"

jest.mock("axios", () => {
    return { get: jest.fn() }
})

describe('Git profile test', () => {
    beforeEach(() => {
        when(axios.get).calledWith(myUrl).mockResolvedValue({ data: { login: "MockUser1" } })
    });

    const myUrl = "/mock"
    it('should render button to load data', () => {
        render(<GitProfile url={myUrl} />)

        expect(screen.getByRole('button', { name: 'Load data' })).toBeInTheDocument()
    })

    it('should show Loader text when Load data button is clicked', () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(screen.getByText("Loading...")).toBeInTheDocument()
    })

    it('should not show Load data button while loading', () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(screen.queryByRole('button', { name: 'Load data' })).not.toBeInTheDocument()
    })

    it('should make network call to url when Load data button is clicked', async () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        expect(axios.get).toHaveBeenCalledWith(myUrl)
    })

    it('should display the data fetched from url when Load data button is clicked', async () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        // await waitFor(() => expect(screen.getByText("hello MockUser1!")).toBeInTheDocument())
        await screen.findByText("hello MockUser1!")
    })

    it('should not show loader when data is loaded', async () => {
        render(<GitProfile url={myUrl} />)

        userEvent.click(screen.getByRole('button', { name: 'Load data' }))

        await screen.findByText("hello MockUser1!")
        expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    })
})