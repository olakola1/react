import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchDesertData, fetchSoupData, fetchHotterData} from "../../../store/card/thunk.ts";
import {getCard} from "../../../store/card/selector.ts";
import {CardContainer} from "../../../components/Card";
import {CardMaps} from "../../../components/Card/maps";

export const HomePage = () => {
    const dispatch = useDispatch();
    const { data } = useSelector(getCard);

    useEffect(() => {
        dispatch(fetchDesertData() as any)
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchSoupData() as any)
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchHotterData() as any)
    }, [dispatch]);



    return (
        <div>
            <CardContainer>
                <CardMaps data={data}/>
            </CardContainer>
        </div>
    );
};
