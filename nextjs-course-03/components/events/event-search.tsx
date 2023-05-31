import * as React from "react";
import Button from "../ui/botton";
import classes from "./event-search.module.css";

interface EventSearchProps {
  onSearch: any;
}

interface EventSearchState {}

class EventSearch extends React.Component<EventSearchProps, EventSearchState> {
  private yearInputRef = React.createRef<HTMLSelectElement>();
  private monthInputRef = React.createRef<HTMLSelectElement>();

  constructor(props: EventSearchProps) {
    super(props);
  }

  submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const year = this.yearInputRef.current?.value;
    const month = this.monthInputRef.current?.value;
    this.props.onSearch({ year, month });
  };

  render() {
    return (
      <form className={classes.form} onSubmit={this.submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="year">Year</label>
            <select id="year" ref={this.yearInputRef}>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor="month">Month</label>
            <select id="month" ref={this.monthInputRef}>
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>Novenmber</option>
              <option value={12}>December</option>
            </select>
          </div>
        </div>
        <Button>Find Events</Button>
      </form>
    );
  }
}

export default EventSearch;
