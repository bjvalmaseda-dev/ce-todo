import { render, screen } from "@testing-library/react";
import Error from "../../components/Error";

describe("<Error/>", () => {
  it("render error message if have an error", () => {
    const onCleanError = jest.fn();
    render(<Error error={true} cleanError={onCleanError} />);
    screen.getByText("Network error");
  });

  it("don't render if error is false or null", () => {
    const onCleanError = jest.fn();
    render(<Error error={false} cleanError={onCleanError} />);
    const el = screen.queryByText("Network error");
    expect(el).toBeNull();
  });

  it("clean error after 3 seconds", () => {
    jest.useFakeTimers();
    const onCleanError = jest.fn();
    render(<Error error={true} cleanError={onCleanError} />);

    expect(onCleanError).not.toBeCalled();

    jest.runAllTimers();
    expect(onCleanError).toHaveBeenCalledTimes(1);
  });
});
