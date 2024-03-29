import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { sessionContext } from '../../index';
import { HasRole } from '../../Authentication/Roles';
import styles from '../css/NavContainer.module.css';
import LoggedInNav from './LoggedInNav';
import LoggedOutNav from './LoggedOutNav';
import { Link } from 'react-router-dom';
import * as keys from '../../GlobalConst'

const NavContainer: React.FC = () => {
	const context = useContext(sessionContext);
	return (
		<Navbar className={styles.NavBar}>
			<Container className={styles.NavContainer}>
				<Navbar.Brand>Lexicon Community</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse className="justify-content-end">
					<Nav>
						<Link to={keys.NKey_NavForum}>Forums</Link>
						{
							context.user ? (
								<LoggedInNav DisplayName={context.user.DisplayName} Admin={HasRole(context.user, "Administrator")} />
							) : (
								<LoggedOutNav />
							)
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
// interface Props {
// 	// LogedIn: boolean;
// 	// Admin: undefined | true;
// 	// UserName: string;
// 	NavHandler: (eventKey: string | null, e?: React.SyntheticEvent<unknown>) => void;
// }

export default NavContainer 