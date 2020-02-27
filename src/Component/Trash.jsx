import React, { Component } from 'react';
import '../Css Files/notes.css';
import Container from '@material-ui/core/Container';
import { ClickAwayListener } from '@material-ui/core';
import TrashNoteCard from './TrashNoteCard'
import { connect } from 'react-redux';
import { trashNotes } from '../FirebaseServices';

class Trash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderClassName: !props.drawerOpen ? 'mainContainer' : 'slideMainContainer',
            Notes: null
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!window.matchMedia('(max-width: 1000px)').matches) {
            return {
                ...state,
                sliderClassName: !props.drawerOpen ? 'mainContainer' : 'slideMainContainer'

            }
        }
    }

    componentDidMount() {
        trashNotes((snapObj) => {
            this.setState({
                Notes: snapObj
            })
        })
    }

    render() {
        return (
            <Container style={{ marginTop: '4.1em', backgroundColor: 'deeppink', }}>
                <div className={this.state.sliderClassName}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.8em' }}>
                            <div className={this.props.viewOpen ? 'listView' : 'gridView'}>
                                {
                                    this.state.Notes !== null && this.state.Notes !== undefined
                                        ? Object.getOwnPropertyNames(this.state.Notes).map((key, index) => (
                                            <TrashNoteCard
                                                NoteObj={this.state.Notes[key]}
                                                Nkey={key}
                                                view={this.props.viewOpen}

                                            />
                                        ))
                                        : null
                                }
                            </div>
                        </div>
                    </ClickAwayListener>
                </div>
            </Container>
        );
    }
}
const mapToStateProps = (state) => {
    return {
        drawerOpen: state.drawer.drawerOpen,
        viewOpen: state.view.viewOpen
    }
}

export default connect(mapToStateProps)(Trash);
