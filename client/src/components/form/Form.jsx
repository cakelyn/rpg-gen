import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: "",
      name: "",
      race: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/api/characters", this.state)
      .then(res => {
        this.resetFormState();
      })
      .catch(err => console.log(err));
  }

  resetFormState() {
    this.setState({
      class: "",
      name: "",
      race: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="form">
        <input
          required
          type="text"
          name="name"
          placeholder="Character name..."
          onChange={e => this.handleChange(e)}
        />
        <select
          required
          name="race"
          value={this.state.race}
          onChange={e => this.handleChange(e)}
        >
          <option value="">Select your race</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-elf">Half-elf</option>
          <option value="Half-orc">Half-orc</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select>
        <select
          required
          name="class"
          value={this.state.class}
          onChange={e => this.handleChange(e)}
        >
          <option value="">Select your class</option>
          <option value="Barbarian">Barbarian</option>
          <option value="Bard">Bard</option>
          <option value="Cleric">Cleric</option>
          <option value="Druid">Druid</option>
          <option value="Fighter">Fighter</option>
          <option value="Monk">Monk</option>
          <option value="Paladin">Paladin</option>
          <option value="Ranger">Ranger</option>
          <option value="Rogue">Rogue</option>
          <option value="Sorcerer">Sorcerer</option>
          <option value="Warlock">Warlock</option>
          <option value="Wizard">Wizard</option>
        </select>
        <button type="submit">Generate!</button>
      </form>
    );
  }
}

export default Form;
