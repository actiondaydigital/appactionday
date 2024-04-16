import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import apiRequest from "@/app/src/services/apiService";
import userApiService from "../../services/useApiService";
import { useRouter } from "expo-router";
import apiService from "@/app/src/services/apiService";

const CalendarDatePicker = () => {
    const router = useRouter();
    const atualDate: any = new Date();
    const { updateData } = userApiService()
    const [selected, setSelected] = useState({ startDate: '', endDate: '' });

    const handleDaySelection = (day: any) => {
        if (!selected.startDate) {
            setSelected({ ...selected, startDate: day.dateString });
        } else if (!selected.endDate) {
            setSelected({ ...selected, endDate: day.dateString });
        } else {
            setSelected({ startDate: day.dateString, endDate: '' });
        }
    };

    const handleUpdateQuery = async () => {
        try {
            if (!selected.endDate) {
                console.error('Por favor, selecione uma data final.');
                return;
            }

            const { startDate, endDate } = selected;
            await apiService({ startDate, endDate });
            
            updateData(startDate, endDate);
            router.replace("../../(tabs)/home");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Calendar
                onDayPress={handleDaySelection}
                maxDate={atualDate}
                markedDates={{
                    [selected.startDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'purple'
                    },
                    [selected.endDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: 'purple'
                    }
                }}
            />

            <Text style={{ fontSize: 22 }}>Data inicial: {selected.startDate} </Text>
            <Text style={{ fontSize: 22 }}>Data final: {selected.endDate} </Text>

            <Button
                title="Att"
                onPress={handleUpdateQuery}
            />

        </View>

    );
};

export default CalendarDatePicker;
