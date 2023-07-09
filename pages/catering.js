import { useState } from 'react';
import styles from '../styles/catering.module.scss'
import addDays from 'date-fns/addDays'
import { format } from 'date-fns';
import { Form, Input, Label, Button } from 'reactstrap';

const twoWeeksFromToday = addDays(Date.now(), 14);

export default function Catering (){
    const [minRequestDate, setMinRequestDate] = useState(format(twoWeeksFromToday, "yyyy-MM-dd"));
    return (
        <div className={styles.main}>
            <h1 className={styles.header}>Submit a Catering Inquiry</h1>
            <h3 className={styles.subheader}>All catering inquiries must be made at least two weeks in advance.</h3>
            <Form className={styles.form} action="/api/email" method="post">
                <Label for="name" className={styles.label}>Name</Label>
                <Input id="name" name="name" type="text" required className={styles.input}/>

                <Label for="email" className={styles.label}>Email Address</Label>
                <Input id="email" name="email" type="email" required className={styles.input}/>

                <Label for="phone" className={styles.label}>Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required className={styles.input}/>

                <Label for="eventDate" className={styles.label}>Event Date</Label>
                <Input id="eventDate" name="eventDate" type="date" required min={minRequestDate} className={styles.input}/>

                <Label for="eventType" className={styles.label}>Event Type</Label>
                <Input id="eventType" name="eventType" type="text" required className={styles.input}/>

                <Label for="cateringNeeds" className={styles.labelGroup}>Please describe the catering needs for your event in as much detail as possible:</Label>
                <Label for="cateringNeeds" className={styles.label}>Catering Needs / Additional Information</Label>
                <Input id="cateringNeeds" name="cateringNeeds" type="textarea" required rows="10" className={styles.input}/>

                <Button type="submit" className={styles.button}>Submit</Button>
            </Form>
        </div>
    )
}