from rest_framework import serializers

from api.models import Company


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField(max_length = None)
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        instance = Company.objects.create(
            name = validated_data.get("name"),
            description = validated_data.get("description"),
            city = validated_data.get("city"),
            address = validated_data.get("address"),
        )
        return instance
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get("name")
        instance.description = validated_data.get("description")
        instance.city = validated_data.get("city")
        instance.address = validated_data.get("address")
        instance.save()
        return instance
    

class CompanySerializer2(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ("id", "name", "description", "city", "address")